# ESP32-C3 TFT Devkit

<ImageGallery
  :images="[
    { src: '/wiki/controller/C003-ESP32-C3-TFT-DevKit/img/esp32-c3-tft-devkit-main.png' },
    { src: '/wiki/controller/C003-ESP32-C3-TFT-DevKit/img/esp32-c3-tft-devkit-1.png' },
    { src: '/wiki/controller/C003-ESP32-C3-TFT-DevKit/img/esp32-c3-tft-devkit-2.png' },
  ]"
/>

## 简介

ESP32-C3 TFT Devkit 是一款体积小巧，搭配 SPI 屏幕接口的微控制器开发板。

在硬件上，采用 ESP32-C3 模组，其搭载有 160 MHz 的 RISC-V 32 位单核处理器，内置 400KB SRAM；支持 14Pin 的触摸显示屏接口和 8Pin 的显示屏接口；板载 Grove 接口，兼容各种丰富的传感器模块；板载的 SH1.25-2P 提供电池供电。

在软件上，可选择 ESP-IDF、Arduino等开发环境来进行开发，从而可以轻松快速地入门，并将其应用于产品中。

## 产品特性

- 采用 ESP32-C3 模组，搭载 RISC-V 32 位单核处理器，主频高达 160MHz
- 集成 400KB SRAM、384KB ROM、4MB Flash 存储器
- 集成 2.4GHz Wi-Fi 和低功耗蓝牙 (Bluetooth LE) 双模无线通信，具有优越的射频性能
- 采用 USB Type-C 接口，无需纠结正反插
- 使用 WCH CH343P USB 转 TTL 芯片，波特率高达6Mpbs，方便调试
- 搭载 8Pin 和 14Pin 屏幕接口，兼容性和扩展性强
- 支持 SH1.25-2P 电池接口
- 支持多种低功耗工作状态，可调节通信距离、数据率和功耗之间的平衡，满足各种应用场景的功耗需求

## 包装信息

- ESP32-C3 TFT Devkit（固定铜柱已安装）
- 2.54MM 8Pin 排阵 * 2

![](/wiki/controller/C003-ESP32-C3-TFT-DevKit/img/esp32-c3-tft-devkit-include.png)

## 规格参数

| 规格     | 参数.  |
| :------: | :----: |
| SoC      | ESP32-C3 160MHz single core，支持 Wi-Fi，4MB flash |
| 接口     | 14Pin TFT FPC 接口；8Pin TFT FPC 接口； HY2.0-4P Grove |
| 工作温度 | 0 ~ 40°C |
| 产品尺寸 | 30.48 x 57.969 MM |
| 产品重量 | 10.9 g |
| 包装尺寸 | 8 x 12 CM |
| 毛重  | 11.8 g |

## 引脚说明

![](/wiki/controller/C003-ESP32-C3-TFT-DevKit/img/esp32-c3-tft-devkit-pinmap.png)

## 原理图

- [ESP32-C3 TFT Devkit V3 原理图](/wiki/controller/C003-ESP32-C3-TFT-DevKit/hardware/ESPC3-LCD&Touch-Driver-V03.pdf)

## 尺寸图

![](/wiki/controller/C003-ESP32-C3-TFT-DevKit/img/esp32-c3-tft-devkit-size.png)

## 数据手册

无

## 使用教程

- [Arduino 入门](arduino.md)
- [PlatformIO 入门](platformio.md)
- [ESP-IDF 入门](esp-idf.md)
- [MicroPython 入门](micropython.md)

## 常见问题

### 能否读取电池电压？

答：不能，目前连接到电池分压电路的 GPIO6 不支持 ADC 功能，无法读取 ADC 值。

## 更多

- [购买链接 🛒](https://item.taobao.com/item.htm?id=974123781745)
