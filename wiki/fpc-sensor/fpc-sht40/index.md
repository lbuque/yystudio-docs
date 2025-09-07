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

**关键特性与参数：**

- 高精度测量：±1.8% 的相对湿度测量精度，±0.2°C 的温度测量精度
- 宽电压范围：1.08V 至 3.6V
- 快速响应：I2C 通讯频率可达 1MHz
- 小尺寸封装：DFN 封装，占地面积 1.5 × 1.5 mm²，高度 0.54 mm
- 测量范围：温度 -40~125°C，湿度 0~100%RH
- 低功耗：工作电流 <0.5 mA
- 可靠性和稳定性高，广泛应用于环境监测、气象观测、农业、建筑等领域
- 完全校准，出厂前已校准，确保测量数据准确

SHT40 是物联网(IoT)设备和环境监测系统中的理想选择。

## 产品参数

- 工作电压：1.07~3.6V
- 工作电流：<0.5mA
- 湿度测量精度：±1.8%RH
- 湿度测量范围：0-100%RH
- 温度测量精度：±0.2℃
- 温度测量范围：-40~125℃
- 通信接口：FPC 0.5mm-6Pin I2C
- 外形尺寸：30mm(W) × 3.6mm(H)
- FPC焊盘尺寸：0.3mm(W) × 4mm(H)
- FPC焊盘间距：0.5mm

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

## 使用教程

### Arduino

#### 准备

- 硬件
- 软件

您可以使用 Arduino 库管理器安装此库：

1. 启动 Arduino IDE
2. 打开库管理器：`Sketch` ➔ `Include Library` ➔ `Manage Libraries...`
3. 在 `Filter your search...` 字段中搜索 `Sensirion I2C SHT4x` 库，然后点击 `install` 按钮进行安装。

#### 接线图

（此处可插入接线图图片）

#### 样例代码1 - 低精度测量温湿度模式

以低精度测量温湿度模式去读取数据，功耗较低，响应速度更快。串口打印出获取到的温湿度数据。

<<< @/public/wiki/fpc-series/fpc-sht40/src/exampleUsage/exampleUsage.ino{cpp:line-numbers}


## 常见问题

还没有客户对此产品有任何问题，欢迎通过 QQ 或论坛联系我们！

## 包装信息

（此处可补充包装内容）

## 更多

- [原理图.pdf](/wiki/fpc-series/fpc-sht40/hardware/FPC-SHT40-CCStudio-SCH.pdf)
- [尺寸图.pdf](/wiki/fpc-series/fpc-sht40/dimensions/FPC-SHT40-CCStudio-Dimensions.pdf)
- [SHT4x数据手册.pdf](/wiki/fpc-series/fpc-sht40/docs/HT_DS_Datasheet_SHT4x_5.pdf)
- [SHT4x注意事项.pdf](/wiki/fpc-series/fpc-sht40/docs/HT_Handling_Instructions_SHTxx.pdf)
- [所有资源](/wiki/fpc-series/fpc-sht40/DXF-SHT40-circle.rar)
- [购买链接 🛒](https://item.taobao.com/item.htm?id=939777159635)
