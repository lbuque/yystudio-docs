# ESP Flasher 使用说明

## 使用步骤

1. **准备工作**
   - 使用 Chrome 或 Edge 浏览器
   - 通过 USB 数据线连接 ESP32-C3 TFT DevKit 到电脑
   - **重要：关闭所有可能占用串口的软件**（如 Arduino IDE、Thonny、串口调试工具等）

2. **进入下载模式（推荐）**
   - 按住开发板上的 **BOOT** 按钮不放
   - 短按一下 **RESET** 按钮，然后松开
   - 松开 **BOOT** 按钮
   - 此时设备应该进入下载模式，更容易连接成功

3. **烧录固件**
   - 点击 "连接设备" 按钮
   - 在弹出的串口选择框中，选择正确的设备：
     - Windows: "USB Serial Port (COMx)" 或包含 "CH340" 的设备
     - macOS: "/dev/cu.wchusbserial" 或类似名称
     - Linux: "/dev/ttyUSB0" 或 "/dev/ttyACM0"
   - 等待连接成功（工具会自动尝试多种连接模式）
   - 点击 "开始烧录" 等待完成
   - 设备会自动重启进入 MicroPython 环境

4. **验证烧录结果**
   - 烧录完成后，手动按一下 **RESET** 按钮
   - 使用串口工具(如 Thonny)以 115200 波特率连接
   - 应该能看到 MicroPython 的 `>>>` 提示符

::: warning 连接问题解决

## 🚨 没有串口设备可选的解决方案

如果点击"连接设备"时弹出的对话框中没有任何设备：

**1. 驱动程序问题（最常见）**
- **Windows**: 安装 CH340 或 CP210x 驱动程序
  - CH340 驱动：[官方下载](http://www.wch-ic.com/downloads/CH341SER_EXE.html)
  - CP210x 驱动：[官方下载](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)
- **macOS**: 通常无需手动安装驱动，但可能需要重启
- **Linux**: 通常自带驱动，检查权限问题

**2. 设备管理器检查（Windows）**
- 打开设备管理器，查看"端口(COM和LPT)"
- 如果看到黄色感叹号，表示驱动有问题
- 如果显示"未知设备"，需要安装正确驱动

**3. 权限问题（Linux/macOS）**
```bash
# Linux: 将用户添加到 dialout 组
sudo usermod -a -G dialout $USER
# 然后重启或重新登录

# macOS: 检查系统安全设置
# 系统设置 > 安全性与隐私 > 隐私 > 输入监控
```

**4. 浏览器兼容性**
- **必需**: Chrome 89+ 或 Edge 89+
- **启用实验功能**: 访问 `chrome://flags/`
  - 搜索 "Experimental Web Platform features"
  - 设置为 "Enabled"
  - 重启浏览器
- **HTTPS 要求**: Web Serial API 只在 HTTPS 环境下工作
  - 本地开发可以使用 `localhost` 或 `127.0.0.1`

## 🔧 其他常见连接问题

**连接失败或 "Cannot read properties of undefined" 错误：**

**基础排查：**
1. 确保使用最新版本的 Chrome 或 Edge 浏览器
2. 检查 USB 数据线是否正常（建议使用带数据功能的线）
3. 尝试重新插拔 USB 线
4. 关闭其他可能占用串口的软件（如 Arduino IDE、串口调试工具等）

**进入下载模式：**
1. 按住开发板的 **BOOT** 按钮不放
2. 按一下 **RESET** 按钮，然后松开
3. 松开 **BOOT** 按钮
4. 此时设备应该进入下载模式

**选择正确串口：**
- Windows: 通常显示为 "USB Serial Port (COMx)" 或 "USB-SERIAL CH340 (COMx)"
- macOS: 通常显示为 "/dev/cu.wchusbserial" 或类似名称
- Linux: 通常显示为 "/dev/ttyUSB0" 或 "/dev/ttyACM0"

**多次尝试连接：**
如果第一次连接失败，工具会自动尝试 4 种不同的连接模式：
1. 简化模式：最基础的连接方式
2. 标准模式：正常的 ESPLoader 连接
3. 兼容模式：手动打开串口连接
4. 纯串口模式：仅建立串口通信（此模式下无法烧录）

**其他解决方案：**
- 尝试降低波特率到 115200
- 确保开发板电源充足
- 检查 USB 接口是否松动
- 重启浏览器后再试

## 📋 快速检查清单

使用烧录工具前，请检查：
- [ ] ✅ 设备已通过 USB 连接到电脑
- [ ] ✅ 在设备管理器中能看到串口设备
- [ ] ✅ 已安装正确的驱动程序（CH340/CP210x）
- [ ] ✅ 关闭了所有占用串口的程序
- [ ] ✅ 使用 Chrome/Edge 最新版本浏览器
- [ ] ✅ 已启用浏览器的实验功能
- [ ] ✅ 在 HTTPS 环境下访问（或本地 localhost）

如果以上都正常但仍无法选择设备，请使用传统的 ESP32 烧录工具如 esptool.py 或 Flash Download Tools。
:::

::: tip 最佳实践
1. **连接前准备**：关闭所有串口相关软件，确保没有其他程序占用设备
2. **选择正确设备**：在弹出的串口选择框中，选择显示为 USB Serial 或包含 CH340 的设备
3. **耐心等待**：首次连接可能需要 10-30 秒，请耐心等待
4. **查看日志**：如果出现问题，请查看操作日志中的详细错误信息
5. **多次尝试**：如果一种连接模式失败，工具会自动尝试其他模式
:::
