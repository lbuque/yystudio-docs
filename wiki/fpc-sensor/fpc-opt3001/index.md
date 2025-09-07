# FPC-OPT3001

<ImageGallery
  :images="[
    { src: '/wiki/fpc-series/fpc-opt3001/img/FPC-OPT3001.png' },
  ]"
/>

## 简介

这是一款基于 OPT3001DNPR 芯片的柔性FPC光照传感器，支持 I2C 接口，默认地址为 0x44。传感器可精准检测环境光强，响应范围广，适用于自动亮度调节、光照监测等应用。
采用 FPC-05F-6PH20 连接器，接口定义包括 VCC、NC、INT、SCL、SDA、GND，其中 SCL/SDA 为I2C数据与时钟线，INT 可用作中断输出。
柔性FPC设计方便在狭小空间内安装，适合智能设备、可穿戴设备及嵌入式应用。

## 产品参数

- 工作电压：1.6~3.6V
- 工作电流：<2.5uA
- 测量范围：0.01 Lux 至 83,000 Lux
- 通信接口：FPC 0.5mm-6Pin I2C
- 外形尺寸：30mm(W) * 3.6mm(H)
- FPC焊盘尺寸：0.3mm(W) * 4mm(H)
- FPC焊盘间距：0.5mm

## 引脚说明

![OPT3001_pinmap.png](/wiki/fpc-series/fpc-opt3001/img/opt3001_pinmap.png)

| 标号 | 名称 | 功能描述 |
| ---- | ---- | -------- |
| 1    | GND  | 电源负极 |
| 2    | SDA  | 数据线   |
| 3    | SCL  | 时钟线   |
| 4    | INT  | 中断     |
| 5    | NC   | 未使用   |
| 6    | VCC  | 电源正极 |


## 使用教程

### arduino

#### 准备

- 硬件

    1. 一块支持 Arduino IDE 的开发板


#### 接线图

待补充

#### 样例代码1 - 连续转换模式

将 OPT3001 配置为自动量程、连续转换模式

<<< @/public/wiki/fpc-series/fpc-opt3001/example/exampleUsage/exampleUsage.ino{cpp:line-numbers}

#### 样例代码2 - OLED屏幕上实时显示测量值

在 OLED 屏幕上实时显示测量值

您需要使用 Arduino 库管理器安装 ``Adafruit_SSD1306`` 库:

1. 启动 Arduino IDE，然后通过以下方式打开库管理器： ``Sketch`` ➔ ``Include Library`` ➔ ``Manage Libraries...``

2. 在 ``Filter your search...`` 字段中搜索 ``Adafruit_SSD1306`` 库，然后点击 ``install`` 按钮进行安装。

<<< @/public/wiki/fpc-series/fpc-opt3001/example/OPT3001Display/OPT3001Display.ino{cpp:line-numbers}

## 常见问题

还没有客户对此产品有任何问题，欢迎通过qq或者论坛联系我们！

## 包装信息

## 更多

- [原理图.pdf](/wiki/fpc-series/fpc-opt3001/hardware/FPC-OPT3001-CC-Studio-SCH-Circle-V01.pdf)
- [尺寸图.pdf](/wiki/fpc-series/fpc-opt3001/dxf/FPC-OPT3001-CC-Studio-DXF.pdf)
- [TI-OP3001.pdf](/wiki/fpc-series/fpc-opt3001/docs/TI-OPT3001.pdf)
- [购买链接](https://item.taobao.com/item.htm?ft=t&id=947730889262)
