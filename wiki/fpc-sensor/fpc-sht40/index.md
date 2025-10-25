# FPC-SHT40

<ImageGallery 
  :images="[
    { src: '/wiki/fpc-series/fpc-sht40/img/FPC-ENV2.png' },
    { src: '/wiki/fpc-series/fpc-sht40/img/FPC-ENV2-1.png' },
    { src: '/wiki/fpc-series/fpc-sht40/img/FPC-ENV2-Kit.png' },
  ]"
/>

## 简介

SHT40 基于全新优化的 CMOSens® 芯片，具有较低的功耗和优化的精度规格。扩展的供电电压范围从 1.08V 到 3.6V，非常适合移动和电池驱动的应用。其尺寸小，坚固的 DFN 外壳可集成到具有挑战性的设计中，并满足高可靠性要求（JEDEC JESD47 认证）。此外，SHT40 符合 RESET® 和 WELL Building Standard™ 等健康建筑相关标准。

## 产品特性

- 高精度测量
- 宽电压范围
- I2C 接口
- 超小尺寸
- 宽测量范围
- 低功耗
- 可靠性和稳定性高
- 出厂前已校准

## 包装信息

- FPC-SHT40 * 1
- FPC-05F-6PH20 座子 * 1

## 规格参数

| 规格     | 参数  |
| :------: | :----: |
| 工作电压 | 1.07~3.6V |
| 工作电流 | <0.5mA |
| I2C 通信频率 | 高达 1MHz |
| 湿度测量精度 | ±1.8%RH |
| 湿度测量范围 | 0-100%RH |
| 温度测量精度 | ±0.2℃ |
| 温度测量范围 | -40~125℃ |
| 通信接口 | FPC 0.5mm-6Pin I2C |
| 外形尺寸 | 30mm(W) × 3.6mm(H) |
| FPC焊盘尺寸 | 0.3mm(W) × 4mm(H) |
| FPC焊盘间距 | 0.5mm |

## 引脚说明

![FPC-ENV2 引脚图](/wiki/fpc-series/fpc-sht40/img/FPC-ENV2-Pinmap.png)

| 标号 | 名称 | 功能描述   |
| ---- | ---- | ---------- |
| 1    | GND  | 电源负极   |
| 2    | SDA  | 数据线     |
| 3    | SCL  | 时钟线     |
| 4    | NC   | 未使用     |
| 5    | GND  | 电源负极   |
| 6    | VCC  | 电源正极   |

## 原理图

- [原理图.pdf](/wiki/fpc-series/fpc-sht40/hardware/FPC-SHT40-CCStudio-SCH.pdf)

## 尺寸图

- [尺寸图.pdf](/wiki/fpc-series/fpc-sht40/dimensions/FPC-SHT40-CCStudio-Dimensions.pdf)

## 数据手册

- [SHT4x数据手册.pdf](/wiki/fpc-series/fpc-sht40/docs/HT_DS_Datasheet_SHT4x_5.pdf)

## 软件平台

### Arduino

- [Sensirion I2C SHT4x](https://github.com/Sensirion/arduino-i2c-sht4x.git)
- [Arduino 使用教程](arduino.md)
- [Temperature And Humidity Monitor](temperature_and_humidity_monitor.md)

## 常见问题

还没有客户对此产品有任何问题，欢迎通过 QQ 或论坛联系我们！

## 更多

- [SHT4x注意事项.pdf](/wiki/fpc-series/fpc-sht40/docs/HT_Handling_Instructions_SHTxx.pdf)
- [所有资源](/wiki/fpc-series/fpc-sht40/DXF-SHT40-circle.rar)
- [购买链接 🛒](https://item.taobao.com/item.htm?id=939777159635)
