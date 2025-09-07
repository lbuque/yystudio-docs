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

**关键特性与参数：**

- 高精度测量：±2% 的相对湿度测量精度，±0.3°C 的温度测量精度
- 宽电压范围：2.15V 至 5.5V
- 快速响应：I2C 通讯频率可达 1MHz
- 小尺寸封装：DFN 封装，占地面积 2.5 × 2.5 mm²，高度 0.9 mm
- 测量范围：温度 -40~125°C，湿度 0~100%RH
- 低功耗：工作电流 <1.5 mA
- 可靠性和稳定性高，广泛应用于环境监测、气象观测、农业、建筑等领域
- 完全校准，出厂前已校准，确保测量数据准确

SHT30 是物联网(IoT)设备和环境监测系统中的理想选择。

## 产品参数

- 工作电压：2.15~5.5V
- 工作电流：<1.5mA
- 湿度测量精度：±2%RH
- 湿度测量范围：0-100%RH
- 温度测量精度：±0.2℃@0~60℃
- 温度测量范围：-40~125℃
- 通信接口：FPC 0.5mm-6Pin I2C
- 外形尺寸：30mm(W) × 3.6mm(H)
- FPC焊盘尺寸：0.3mm(W) × 4mm(H)
- FPC焊盘间距：0.5mm

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

## 使用教程

### Arduino

#### 准备

- 硬件
- 软件

您可以使用 Arduino 库管理器安装此库：

1. 启动 Arduino IDE
2. 打开库管理器：`Sketch` ➔ `Include Library` ➔ `Manage Libraries...`
3. 在 `Filter your search...` 字段中搜索 `Sensirion I2C SHT3X` 库，然后点击 `install` 按钮进行安装。

#### 接线图

> [!TIP]
> 接线图还在施工中！！！

#### 样例代码1 - 单次测量温湿度模式

单次测量模式：控制板发送一次采集命令，传感器采集一次数据。此模式可根据需要读取数据，功耗较低。

<<< @/public/wiki/fpc-series/fpc-sht30/src/exampleUsageSingleShot/exampleUsageSingleShot.ino{cpp:line-numbers}

结果：串口打印出获取到的温湿度数据。

#### 样例代码2 - 周期测量温湿度模式

周期测量模式：传感器按照设定采集频率自动采集数据。

<<< @/public/wiki/fpc-series/fpc-sht30/src/exampleUsage/exampleUsage.ino{cpp:line-numbers}


结果：串口前10S打印周期测量模式下获取的温湿度数据，10S后退出周期测量模式，进入单次测量模式，打印单次测量模式下获取的温湿度数据。

## 常见问题

还没有客户对此产品有任何问题，欢迎通过 QQ 或论坛联系我们！

## 包装信息

> [!TIP]
> 包装图还在施工中！！！

## 更多

- [原理图.pdf](/wiki/fpc-series/fpc-sht30/hardware/FPC-SHT30-CCStudio-SCH.pdf)
- [尺寸图.pdf](/wiki/fpc-series/fpc-sht30/dimensions/FPC-SHT30-CCStudio-Dimensions.pdf)
- [SHT3x数据手册.pdf](/wiki/fpc-series/fpc-sht30/docs/Datasheet_SHT3x_DIS.pdf)
- [SHT3x注意事项.pdf](/wiki/fpc-series/fpc-sht30/docs/HT_Handling_Instructions_SHTxx.pdf)
- [购买链接 🛒](https://item.taobao.com/item.htm?id=866870632646)
