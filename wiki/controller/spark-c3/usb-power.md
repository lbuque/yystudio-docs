# USB Power模块(适用于继电器控制)

本章节介绍如何使用 SparkC3 控制 USB Power 模块。

本教程同样适用于市场上销售的继电器控制模块。

## 一键烧录固件

使用下面的工具可以直接在浏览器中烧录预编译的固件到 SparkC3 开发板，无需安装任何软件：

<EspFlasher 
  :firmware-options="[
    {
      id: 'basic',
      name: 'USB Power 基础控制版',
      version: 'v1.0',
      description: '基础的 USB Power 开关控制功能，适合简单的开关控制应用',
      url: '/wiki/controller/spark-c3/firmware/usb-power-basic.bin',
      address: 0x0000
    },
    {
      id: 'wifi',
      name: 'USB Power Wi-Fi 远程控制版',
      version: 'v1.1',
      description: '包含 Wi-Fi 连接和 Web 界面的完整功能，支持远程控制',
      url: '/wiki/controller/spark-c3/firmware/usb-power-wifi.bin',
      address: 0x0000
    },
    {
      id: 'advanced',
      name: 'USB Power 高级版',
      version: 'v2.0',
      description: '包含定时控制、状态监控、多设备管理等高级功能',
      url: '/wiki/controller/spark-c3/firmware/usb-power-advanced.bin',
      address: 0x0000
    }
  ]"
  :baud-rate="921600"
/>

### 使用步骤

1. **选择固件**
   - 从下拉菜单中选择适合的固件版本
   - **基础控制版**：适合简单的开关控制
   - **Wi-Fi 远程控制版**：支持通过 Web 界面远程控制
   - **高级版**：包含定时、监控等高级功能

2. **准备工作**
   - 使用 Chrome 或 Edge 浏览器打开此页面
   - 通过 USB 数据线将 SparkC3 连接到电脑
   - 确保开发板进入下载模式（通常自动进入）

3. **烧录固件**
   - 点击 "连接设备" 按钮
   - 在弹出的串口选择对话框中选择对应的串口
   - 等待设备连接成功并显示设备信息
   - 点击 "开始烧录" 按钮开始固件烧录
   - 等待烧录完成（通常需要几十秒）

4. **验证结果**
   - 烧录完成后设备会自动重启
   - 打开串口监视器可以看到设备启动信息
   - 根据选择的固件版本进行相应配置

::: warning 注意事项
- 请使用 **Chrome 或 Edge** 浏览器，Safari 不支持 Web Serial API
- 烧录前请确保 SparkC3 已通过 **USB 数据线** 连接到电脑
- 烧录过程中请 **勿断开 USB 连接**
- 如果连接失败，请尝试重新插拔 USB 线或按下开发板上的 Reset 按钮
- 部分 USB 线仅支持充电，请使用支持数据传输的 USB 线
:::

::: tip 固件版本说明

**🔧 基础控制版 (v1.0)**
- USB Power 模块基本开关控制
- 串口调试输出
- 适合学习和简单应用

**📶 Wi-Fi 远程控制版 (v1.1)**
- 包含基础控制版所有功能
- Wi-Fi 连接和 Web 服务器
- 远程控制 Web 界面
- 状态监控和反馈
- 适合家庭自动化应用

**⚡ 高级版 (v2.0)**
- 包含 Wi-Fi 版所有功能
- 定时开关控制
- 电流监控（需要额外硬件）
- 多设备管理
- OTA 固件更新
- MQTT 支持
- 适合专业和商业应用

:::

### 固件版本使用指南

#### 🔧 基础控制版使用说明

烧录基础控制版后，设备会自动执行开关循环：
- 每2秒开启 USB Power
- 每2秒关闭 USB Power
- 通过串口监视器可以看到状态输出

适用场景：学习 ESP32 编程、简单的定时开关控制

#### 📶 Wi-Fi 远程控制版使用说明

1. **首次配置**：
   - 烧录完成后，设备会创建热点 `SparkC3-Setup`
   - 连接热点并访问 `192.168.4.1` 进行 Wi-Fi 配置
   - 输入你的 Wi-Fi 网络信息

2. **远程控制**：
   - 设备连接 Wi-Fi 后，通过串口查看分配的 IP 地址
   - 在浏览器中访问该 IP 地址即可远程控制

适用场景：家庭自动化、远程设备控制

#### ⚡ 高级版使用说明

1. **Web 管理界面**：
   - 包含完整的设备管理功能
   - 支持定时任务设置
   - 设备状态监控面板

2. **高级功能**：
   - 支持多设备管理
   - MQTT 消息推送
   - OTA 在线更新

适用场景：智能家居系统、工业物联网应用

## 原理图

![原理图](/wiki/controller/spark-c3/img/schematic.png)

## 硬件连接

将 SparkC3 和 USB Power 模块连接起来，确保连接正确。

![SparkC3套件连接](/wiki/controller/spark-c3/img/spark-c3-kit.png)

## 基础代码示例

### Arduino IDE 示例

```cpp
#include <Arduino.h>

#define POWER_PIN 9  // USB Power 控制引脚

void setup() {
  Serial.begin(115200);
  pinMode(POWER_PIN, OUTPUT);
  digitalWrite(POWER_PIN, HIGH);  // 使用高电平来关闭 USB 的电源
  Serial.println("USB Power 控制系统启动");
}

void loop() {
  // 打开 USB Power
  digitalWrite(POWER_PIN, LOW);
  Serial.println("USB Power 开启");
  delay(2000);

  // 关闭 USB Power
  digitalWrite(POWER_PIN, HIGH);
  Serial.println("USB Power 关闭");
  delay(2000);
}
```

### MicroPython 示例

即将推出...

## Wi-Fi 远程控制

通过 Wi-Fi 连接实现远程 USB Power 控制：

```cpp
#include <WiFi.h>
#include <WebServer.h>

// !!! 请替换为您的 Wi-Fi SSID 和密码 !!!
const char* ssid = "your_wifi_ssid";
const char* password = "your_wifi_password";

WebServer server(80);
const int relayPin = 9;
bool relayState = false;

void setup() {
  Serial.begin(115200);
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, HIGH);  // 初始状态关闭

  // 连接 Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("正在连接WiFi...");
  }

  Serial.println("WiFi连接成功");
  Serial.print("IP地址: ");
  Serial.println(WiFi.localIP());

  // 设置Web服务器路由
  server.on("/", handleRoot);
  server.on("/relay/on", handleRelayOn);
  server.on("/relay/off", handleRelayOff);
  server.on("/status", handleStatus);

  server.begin();
  Serial.println("Web服务器启动");
}

void loop() {
  server.handleClient();
}

void handleRoot() {
  String html = "<!DOCTYPE html>";
  html += "<html><head>";
  html += "<meta charset='UTF-8'>";
  html += "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
  html += "<title>SparkC3 USB Power 控制</title>";
  html += "<style>";
  html += "body { font-family: Arial, sans-serif; text-align: center; margin: 50px; }";
  html += "button { padding: 10px 20px; margin: 10px; font-size: 16px; cursor: pointer; }";
  html += ".status { font-size: 18px; margin: 20px 0; }";
  html += "</style>";
  html += "</head><body>";
  html += "<h1>SparkC3 USB Power 控制</h1>";
  html += "<div class='status'>USB Power 状态: <span id='status'>" + String(relayState ? "开启" : "关闭") + "</span></div>";
  html += "<button onclick='toggleRelay(true)'>开启</button>";
  html += "<button onclick='toggleRelay(false)'>关闭</button>";
  html += "<script>";
  html += "function toggleRelay(state) {";
  html += "  var xhr = new XMLHttpRequest();";
  html += "  xhr.onreadystatechange = function() {";
  html += "    if (xhr.readyState == 4 && xhr.status == 200) {";
  html += "      document.getElementById('status').innerText = state ? '开启' : '关闭';";
  html += "    }";
  html += "  };";
  html += "  xhr.open('GET', state ? '/relay/on' : '/relay/off', true);";
  html += "  xhr.send();";
  html += "}";
  html += "</script>";
  html += "</body></html>";
  server.send(200, "text/html; charset=utf-8", html);
}

void handleRelayOn() {
  digitalWrite(relayPin, LOW);
  relayState = true;
  server.send(200, "text/plain; charset=utf-8", "USB Power 已开启");
}

void handleRelayOff() {
  digitalWrite(relayPin, HIGH);
  relayState = false;
  server.send(200, "text/plain; charset=utf-8", "USB Power 已关闭");
}

void handleStatus() {
  String json = "{\"relay\":" + String(relayState ? "true" : "false") + "}";
  server.send(200, "application/json", json);
}
```



**使用步骤：**

1. 将 SparkC3 通过 USB Serial 连接到计算机。
2. 在 Arduino IDE 中打开上述代码。
3. 替换 Wi-Fi SSID 和密码。
4. 在弹出的对话框中选择正确的串口设备
5. 上传代码到 SparkC3。
6. 等待固件烧录完成
7. 将 SparkC3 连接到 USB Power 模块。

**固件功能：**

- 预配置的 USB Power 控制代码
- Wi-Fi 连接和 Web 服务器
- 远程控制接口
- 状态监控功能

## 注意事项

暂无

## 手动编译固件

如果你想自定义固件或学习编译过程，可以按照以下步骤手动编译：

### 1. 准备开发环境

- 安装 [Arduino IDE](https://www.arduino.cc/en/software) 或 [VS Code + PlatformIO](https://platformio.org/install/ide?install=vscode)
- 安装 ESP32 开发板支持包
- 安装必要的库文件

### 2. 编译步骤

1. 将上面的 Wi-Fi 远程控制代码复制到 Arduino IDE 中
2. 修改 Wi-Fi SSID 和密码为你的实际值
3. 选择开发板：ESP32C3 Dev Module
4. 设置编译参数：
   - Upload Speed: 921600
   - CPU Frequency: 160MHz
   - Flash Size: 4MB
   - Partition Scheme: Default 4MB with spiffs

5. 编译并生成 .bin 文件：
   - 点击 `Sketch` → `Export compiled Binary`
   - 或使用快捷键 `Ctrl+Alt+S`

6. 生成的 .bin 文件位于项目文件夹中，可用于批量烧录

### 3. 批量烧录

如果需要为多个设备烧录相同固件，可以使用：
- [ESP32 Flash Download Tool](https://www.espressif.com/en/support/download/other-tools)
- [esptool.py](https://github.com/espressif/esptool) 命令行工具
- 上面的网页烧录工具

## 故障排除

### 常见问题及解决方案

#### 1. 无法连接设备

**问题症状**：点击"连接设备"后没有弹出串口选择对话框，或显示连接失败

**解决方案**：
- 确认使用的是 Chrome 或 Edge 浏览器
- 检查 USB 线是否支持数据传输（不仅仅是充电线）
- 尝试更换 USB 端口
- 检查设备管理器中是否识别到 ESP32 设备
- 安装 [ESP32 USB 驱动](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/establish-serial-connection.html)

#### 2. 烧录失败

**问题症状**：烧录过程中断或显示错误信息

**解决方案**：
- 按住开发板上的 BOOT 按钮，然后按 RESET 按钮进入下载模式
- 降低波特率到 115200 重试
- 检查固件文件是否完整
- 关闭其他可能占用串口的程序（如 Arduino IDE 串口监视器）

#### 3. 设备不工作

**问题症状**：固件烧录成功但 USB Power 不响应

**解决方案**：
- 检查硬件连接是否正确
- 确认继电器模块供电正常
- 使用串口监视器查看设备启动日志
- 检查 Wi-Fi 连接状态

#### 4. 无法访问 Web 界面

**问题症状**：设备连接 Wi-Fi 成功但无法打开控制页面

**解决方案**：
- 确认设备和电脑在同一网络下
- 检查路由器是否开启了设备隔离
- 尝试使用设备的 IP 地址直接访问
- 检查防火墙设置

### 获取帮助

如果以上方法都无法解决问题，请：

1. 记录详细的错误信息和操作步骤
2. 通过以下方式联系技术支持：
   - QQ群：[待补充]
   - 邮箱：[待补充] 
   - GitHub Issues：[待补充]

## 注意事项

暂无
