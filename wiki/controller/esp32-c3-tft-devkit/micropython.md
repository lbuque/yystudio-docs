# MicroPython 入门

## 下载最新的 MicroPython 固件

使用下面的工具可以直接在浏览器中烧录预编译的固件到 ESP32-C3 TFT Devkit 开发板，无需安装任何软件：

<EspFlasherNew 
  :firmware-options="[
    {
      id: 'micropython',
      name: 'MicroPython v1.26.1',
      version: 'v1.26.1',
      description: 'MicroPython 官方发布的 v1.26.1 固件，适用于 ESP32-C3-TFT-DevKit',
      url: '/wiki/controller/C003-ESP32-C3-TFT-DevKit/firmware/ESP32_GENERIC_C3-20250911-v1.26.1.bin',
      address: 0x0000,
      size: '1.4MB'
    }
  ]"
  :baud-rate="921600"
/>

::: tip 使用说明和故障排查
如果出现无法烧录等情况，请参考 [ESP Flasher 使用说明](/faq/espflasher.md)
:::


## 连接到 MicroPython REPL

固件烧录完成后，你可以通过以下方式连接到 MicroPython 的交互式解释器：

### 使用串口工具
- **波特率**: 115200
- **数据位**: 8
- **停止位**: 1
- **校验位**: 无

推荐工具：
- Thonny IDE（最适合初学者）
- Arduino IDE 串口监视器
- PuTTY（Windows）
- Screen（macOS/Linux）

### 第一次连接
```python
# 按下 Enter 键应该看到 MicroPython 提示符
>>> print("Hello, ESP32-C3!")
Hello, ESP32-C3!

# 查看系统信息
>>> import sys
>>> sys.implementation
(name='micropython', version=(1, 26, 1), _machine='ESP32C3 module with ESP32C3', _mpy=0)
```

## 基础示例

### LED 闪烁
```python
import machine
import time

# 创建 LED 对象 (GPIO 2)
led = machine.Pin(2, machine.Pin.OUT)

# 闪烁循环
while True:
    led.on()
    time.sleep(0.5)
    led.off()
    time.sleep(0.5)
```

### Wi-Fi 连接
```python
import network

# 启用 Wi-Fi 站点模式
wlan = network.WLAN(network.STA_IF)
wlan.active(True)

# 连接到 Wi-Fi
wlan.connect('你的WiFi名称', '你的WiFi密码')

# 等待连接
while not wlan.isconnected():
    pass

print('连接成功！IP 地址:', wlan.ifconfig()[0])
```

## 常见问题

### Q: 连接失败，提示 "Cannot read properties of undefined"
**A:** 这通常是 esptool-js 库的兼容性问题。解决方案：
1. 刷新页面重试
2. 按住 BOOT 按钮进入下载模式后再连接
3. 尝试不同的 USB 线或 USB 接口
4. 等待工具自动尝试多种连接模式
5. 如果所有模式都失败，请使用传统的 esptool.py 工具

### Q: 烧录后设备无响应
**A:** 
1. 按下开发板的 RESET 按钮重启设备
2. 检查固件是否烧录到正确地址（0x0000）
3. 重新插拔 USB 线
4. 如果仍无响应，可能需要重新烧录固件

### Q: 无法看到 MicroPython 提示符
**A:** 
1. 确认串口工具波特率设置为 115200
2. 按下 Enter 键几次尝试唤醒 REPL
3. 检查是否选择了正确的串口
4. 尝试发送 Ctrl+C 中断当前程序

### Q: 如何重新烧录固件？
**A:** 
1. 如果设备响应正常，直接使用烧录工具即可
2. 如果设备无响应，按住 BOOT 按钮，按 RESET 按钮进入下载模式
3. 重新使用上面的烧录工具

### Q: 浏览器不支持 Web Serial API
**A:** 
1. 确保使用 Chrome 88+ 或 Edge 88+ 浏览器
2. 在浏览器地址栏输入 `chrome://flags/` 搜索 "Experimental Web Platform features" 并启用
3. 或者下载安装传统的 ESP32 刷机工具

## 进阶学习资源

- [MicroPython 官方文档](https://docs.micropython.org/)
- [ESP32 MicroPython 教程](https://docs.micropython.org/en/latest/esp32/tutorial/index.html)
- [Thonny IDE 下载](https://thonny.org/)

## 故障排除

如果遇到任何问题，请：
1. 检查硬件连接
2. 确认使用正确的串口和波特率
3. 尝试重新烧录固件
4. 查看开发板的 LED 指示状态
