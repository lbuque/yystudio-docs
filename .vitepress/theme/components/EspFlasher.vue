<template>
  <div class="esp-flasher">
    <div class="flasher-container">
      <h3>ESP32 固件一键烧录</h3>
      
      <div class="firmware-selection">
        <h4>选择固件</h4>
        <select v-model="selectedFirmware" class="firmware-select">
          <option value="">请选择固件...</option>
          <option 
            v-for="firmware in firmwareOptions" 
            :key="firmware.id"
            :value="firmware"
          >
            {{ firmware.name }}
          </option>
        </select>
        
        <div v-if="selectedFirmware" class="firmware-details">
          <p><strong>文件:</strong> {{ selectedFirmware.url.split('/').pop() }}</p>
          <p><strong>版本:</strong> {{ selectedFirmware.version }}</p>
          <p><strong>描述:</strong> {{ selectedFirmware.description }}</p>
          <p><strong>烧录地址:</strong> 0x{{ selectedFirmware.address.toString(16).toUpperCase() }}</p>
        </div>
      </div>
      
      <div class="status-display">
        <div class="status-item">
          <span class="label">连接状态:</span>
          <span :class="['status-value', connectionStatus.toLowerCase()]">
            {{ connectionStatus }}
          </span>
        </div>
        <div class="status-item" v-if="deviceInfo">
          <span class="label">设备信息:</span>
          <span class="status-value">{{ deviceInfo }}</span>
        </div>
      </div>

      <div class="controls">
        <button 
          v-if="!isConnected" 
          @click="connectDevice"
          :disabled="isConnecting"
          class="btn btn-primary"
        >
          {{ isConnecting ? '连接中...' : '连接设备' }}
        </button>

        <div v-if="isConnected" class="connected-controls">
          <button 
            @click="flashFirmware"
            :disabled="isFlashing || !selectedFirmware"
            class="btn btn-success"
          >
            {{ isFlashing ? '烧录中...' : '开始烧录' }}
          </button>
          
          <button 
            @click="disconnect"
            :disabled="isFlashing"
            class="btn btn-secondary"
          >
            断开连接
          </button>
        </div>
      </div>

      <div class="progress-section" v-if="isFlashing">
        <div class="progress-bar">
          <div 
            class="progress-fill" 
            :style="{ width: flashProgress + '%' }"
          ></div>
        </div>
        <p class="progress-text">{{ flashProgress }}% - {{ currentOperation }}</p>
      </div>

      <div class="log-section">
        <h4>操作日志</h4>
        <div class="log-container" ref="logContainer">
          <div 
            v-for="(log, index) in logs" 
            :key="index"
            :class="['log-entry', log.type]"
          >
            <span class="log-time">{{ log.time }}</span>
            <span class="log-message">{{ log.message }}</span>
          </div>
        </div>
        <button @click="clearLogs" class="btn btn-small">清空日志</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const props = defineProps({
  firmwareOptions: {
    type: Array,
    required: true,
    default: () => []
  },
  baudRate: {
    type: Number,
    default: 921600
  }
})

// 状态管理
const selectedFirmware = ref(null)
const isConnected = ref(false)
const isConnecting = ref(false)
const isFlashing = ref(false)
const connectionStatus = ref('未连接')
const deviceInfo = ref('')
const flashProgress = ref(0)
const currentOperation = ref('')
const logs = ref([])
const logContainer = ref(null)

// esptool 实例
let espTool = null
let transport = null

// 添加日志
const addLog = (message, type = 'info') => {
  const now = new Date()
  const timeStr = now.toLocaleTimeString()
  logs.value.push({
    time: timeStr,
    message,
    type
  })
  
  nextTick(() => {
    if (logContainer.value) {
      logContainer.value.scrollTop = logContainer.value.scrollHeight
    }
  })
}

// 清空日志
const clearLogs = () => {
  logs.value = []
}

// 连接设备
const connectDevice = async () => {
  if (!navigator.serial) {
    addLog('浏览器不支持 Web Serial API，请使用 Chrome/Edge 浏览器', 'error')
    return
  }

  try {
    isConnecting.value = true
    connectionStatus.value = '连接中'
    addLog('请选择串口设备...')

    // 请求串口权限
    const port = await navigator.serial.requestPort()
    
    // 动态导入 esptool-js
    const { ESPLoader, Transport } = await import('esptool-js')
    
    transport = new Transport(port)
    espTool = new ESPLoader(transport, props.baudRate)
    
    addLog('正在连接设备...')
    await espTool.main_fn()
    
    // 获取设备信息
    const chipName = await espTool.chip.get_chip_description()
    const macAddr = await espTool.chip.read_mac()
    
    deviceInfo.value = `${chipName} (MAC: ${macAddr})`
    isConnected.value = true
    connectionStatus.value = '已连接'
    addLog(`设备连接成功: ${deviceInfo.value}`, 'success')
    
  } catch (error) {
    addLog(`连接失败: ${error.message}`, 'error')
    connectionStatus.value = '连接失败'
  } finally {
    isConnecting.value = false
  }
}

// 断开连接
const disconnect = async () => {
  try {
    if (transport) {
      await transport.disconnect()
    }
    isConnected.value = false
    connectionStatus.value = '未连接'
    deviceInfo.value = ''
    addLog('设备已断开连接')
  } catch (error) {
    addLog(`断开连接时出错: ${error.message}`, 'error')
  }
}

// 烧录固件
const flashFirmware = async () => {
  if (!selectedFirmware.value) {
    addLog('请先选择要烧录的固件', 'error')
    return
  }

  try {
    isFlashing.value = true
    flashProgress.value = 0
    currentOperation.value = '准备烧录'
    
    addLog(`开始烧录固件: ${selectedFirmware.value.name}`)
    addLog('正在下载固件文件...')
    
    // 下载固件文件
    const response = await fetch(selectedFirmware.value.url)
    if (!response.ok) {
      throw new Error(`无法下载固件文件: ${response.status}`)
    }
    
    const firmwareData = await response.arrayBuffer()
    currentOperation.value = '文件下载完成'
    flashProgress.value = 10
    
    addLog(`固件文件下载完成，大小: ${firmwareData.byteLength} 字节`)
    
    // 擦除Flash
    currentOperation.value = '擦除Flash'
    flashProgress.value = 20
    addLog('正在擦除Flash...')
    
    const fileArray = [{
      data: new Uint8Array(firmwareData), 
      address: selectedFirmware.value.address
    }]
    
    await espTool.write_flash(
      fileArray,
      'keep',
      'keep',
      'keep',
      false,
      true,
      // 进度回调
      (index, written, total) => {
        const progress = Math.round((written / total) * 100)
        flashProgress.value = 20 + (progress * 0.7) // 20% 到 90%
        currentOperation.value = `烧录中 ${written}/${total} 字节`
      }
    )
    
    flashProgress.value = 95
    currentOperation.value = '验证固件'
    addLog('正在验证固件...')
    
    // 重启设备
    addLog('重启设备...')
    await espTool.hard_reset()
    
    flashProgress.value = 100
    currentOperation.value = '烧录完成'
    addLog(`固件 "${selectedFirmware.value.name}" 烧录成功！`, 'success')
    
  } catch (error) {
    addLog(`烧录失败: ${error.message}`, 'error')
    currentOperation.value = '烧录失败'
  } finally {
    isFlashing.value = false
  }
}

onMounted(() => {
  addLog('ESP32 固件烧录工具已准备就绪')
  if (!navigator.serial) {
    addLog('警告: 浏览器不支持 Web Serial API', 'warning')
  }
  
  // 如果只有一个固件选项，自动选择
  if (props.firmwareOptions.length === 1) {
    selectedFirmware.value = props.firmwareOptions[0]
  }
})
</script>

<style scoped>
.esp-flasher {
  max-width: 800px;
  margin: 20px auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.flasher-container {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.flasher-container h3 {
  margin: 0 0 20px 0;
  color: #333;
  text-align: center;
}

.firmware-selection {
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  border: 1px solid #e1e5e9;
}

.firmware-selection h4 {
  margin: 0 0 12px 0;
  color: #333;
}

.firmware-select {
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.firmware-select:focus {
  outline: none;
  border-color: #007bff;
}

.firmware-details {
  margin-top: 16px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 4px solid #007bff;
}

.firmware-details p {
  margin: 4px 0;
  color: #555;
  font-size: 13px;
}

.status-display {
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  border: 1px solid #e1e5e9;
}

.status-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.status-item:last-child {
  margin-bottom: 0;
}

.label {
  font-weight: 600;
  color: #555;
}

.status-value {
  font-weight: 500;
}

.status-value.未连接 {
  color: #6c757d;
}

.status-value.连接中 {
  color: #ffc107;
}

.status-value.已连接 {
  color: #28a745;
}

.status-value.连接失败 {
  color: #dc3545;
}

.firmware-info {
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  border: 1px solid #e1e5e9;
}

.firmware-info h4 {
  margin: 0 0 12px 0;
  color: #333;
}

.firmware-info p {
  margin: 4px 0;
  color: #666;
}

.controls {
  text-align: center;
  margin-bottom: 20px;
}

.connected-controls {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #0056b3;
}

.btn-success {
  background: #28a745;
  color: white;
}

.btn-success:hover:not(:disabled) {
  background: #1e7e34;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-secondary:hover:not(:disabled) {
  background: #545b62;
}

.btn-small {
  padding: 8px 16px;
  font-size: 12px;
}

.progress-section {
  margin-bottom: 20px;
}

.progress-bar {
  width: 100%;
  height: 20px;
  background: #e9ecef;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 8px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #28a745, #20c997);
  transition: width 0.3s ease;
}

.progress-text {
  text-align: center;
  margin: 0;
  font-weight: 500;
  color: #333;
}

.log-section {
  background: white;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #e1e5e9;
}

.log-section h4 {
  margin: 0 0 12px 0;
  color: #333;
}

.log-container {
  max-height: 200px;
  overflow-y: auto;
  background: #f8f9fa;
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 12px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 12px;
}

.log-entry {
  margin-bottom: 4px;
  display: flex;
  gap: 8px;
}

.log-time {
  color: #6c757d;
  min-width: 80px;
}

.log-message {
  flex: 1;
}

.log-entry.info .log-message {
  color: #333;
}

.log-entry.success .log-message {
  color: #28a745;
  font-weight: 500;
}

.log-entry.error .log-message {
  color: #dc3545;
  font-weight: 500;
}

.log-entry.warning .log-message {
  color: #ffc107;
  font-weight: 500;
}

@media (max-width: 768px) {
  .flasher-container {
    padding: 16px;
    margin: 16px;
  }
  
  .firmware-selection {
    padding: 12px;
  }
  
  .firmware-select {
    font-size: 16px; /* 防止移动端缩放 */
  }
  
  .firmware-details {
    padding: 10px;
  }
  
  .firmware-details p {
    font-size: 12px;
  }
  
  .connected-controls {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
}
</style>
