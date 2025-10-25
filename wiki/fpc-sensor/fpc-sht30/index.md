# FPC-SHT30

<ImageGallery 
  :images="[
    { src: '/wiki/fpc-series/fpc-sht30/img/FPC-SHT30.png' },
    { src: '/wiki/fpc-series/fpc-sht30/img/FPC-SHT30-1.png' },
    { src: '/wiki/fpc-series/fpc-sht30/img/FPC-SHT30-2.png' },
    { src: '/wiki/fpc-series/fpc-sht30/img/FPC-SHT30-3.png' },
  ]"
/>

## 简介

SHT30 是一款由 Sensirion 公司生产的高精度数字温湿度传感器，基于先进的 CMOSens® 技术，能够提供完全校准、线性化和温度补偿的数字输出。

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
| 工作电压 | 2.15~5.5V |
| 工作电流 | <1.5mA |
| I2C 通信频率 | 高达 1MHz |
| 湿度测量精度 | ±2%RH |
| 湿度测量范围 | 0-100%RH |
| 温度测量精度 | ±0.2℃@0~60℃ |
| 温度测量范围 | -40~125℃ |
| 通信接口 | FPC 0.5mm-6Pin I2C |
| 外形尺寸 | 30mm(W) × 3.6mm(H) |
| FPC焊盘尺寸 | 0.3mm(W) × 4mm(H) |
| FPC焊盘间距 | 0.5mm |

## 引脚说明

![SHT30 引脚图](/wiki/fpc-series/fpc-sht30/img/sht30_pinmap.png)

| 标号 | 名称 | 功能描述   |
| ---- | ---- | ---------- |
| 1    | GND  | 电源负极   |
| 2    | SDA  | 数据线     |
| 3    | SCL  | 时钟线     |
| 4    | NC   | 未使用     |
| 5    | GND  | 电源负极   |
| 6    | VCC  | 电源正极   |

## 原理图

- [原理图.pdf](/wiki/fpc-series/fpc-sht30/hardware/FPC-SHT30-CCStudio-SCH.pdf)

## 尺寸图

- [尺寸图.pdf](/wiki/fpc-series/fpc-sht30/dimensions/FPC-SHT30-CCStudio-Dimensions.pdf)

## 数据手册

- [SHT3x数据手册.pdf](/wiki/fpc-series/fpc-sht30/docs/Datasheet_SHT3x_DIS.pdf)

## 软件平台

- [Sensirion I2C SHT4x](https://github.com/Sensirion/arduino-i2c-sht4x.git)
- [Arduino 使用教程](arduino.md)
- [Temperature And Humidity Monitor](temperature_and_humidity_monitor.md)

## 常见问题

还没有客户对此产品有任何问题，欢迎通过 QQ 或论坛联系我们！


## 更多

- [SHT3x注意事项.pdf](/wiki/fpc-series/fpc-sht30/docs/HT_Handling_Instructions_SHTxx.pdf)
- [购买链接 🛒](https://item.taobao.com/item.htm?id=866870632646)
