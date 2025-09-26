# CH343P 串口下载器

<ImageGallery
  :images="[
    { src: '/wiki/tools/ch343p/img/CH343P-V01-main.png' },
    { src: '/wiki/tools/ch343p/img/CH343P-V01-main2.png' },
    { src: '/wiki/tools/ch343p/img/CH343P-V01-size.png' },
    { src: '/wiki/tools/ch343p/img/CH343P-V01-main3.png' },
    { src: '/wiki/tools/ch343p/img/CH343P-V01-main4.png' },
  ]"
/>

## 简介

CH343P 串口下载器是一款 USB 串口调试器，同时集成自动下载电路，能够非常方便的为 ESP32 系列产品进行程序下载与程序调试。

## 产品特性

- USB-TTL
- Type-C接口
- ESP32系列产品程序下载器
- 3.3V 和 5V 电压可自由切换
- 波特率: 30bps to 6Mbps
- 支持的数据格式:
    - 数据位:5、6、7和8
    - 停止位:1、1.5和2
    - 奇偶校验:奇数,偶数,标记,空格,无奇偶校验
- 符合USB2.0规范
- 内置EEPROM
- 工作温度: -40°C to +85°C

## 包装信息

- CH343P 串口下载器 * 1
- 软硅胶杜邦线 带标号 20CM * 1（选配）

## 规格参数

| 规格 | 参数 |
| ---- | ---- |
| 产品尺寸 | 40 x 30 x 5mm |
| 产品重量 | 38.5g         |
| 包装尺寸 | 80 x 50 x 3mm |
| 毛重     | 40g           |


## 引脚说明

| 标号 | 名称 | 功能描述   |
| ---- | ---- | ---------- |
| 1    | +5V  | 5V电源     |
| 2    | GND  | 地线       |
| 3    | TX   | 发射线，IO电平3.3V |
| 4    | RX   | 接收线，IO电平3.3V |

## 使用教程

  ![安装固件](/wiki/tools/ch343p/img/CH343P-V01-detail.png)

### 驱动安装

本产品在各种主流系统上均能免驱使用，如出现无法识别的情况，请安装 [VCP驱动](https://wch.cn/products/CH343.html).

### 电平切换

  ![安装固件](/wiki/tools/ch343p/img/CH343P-V01_vio-selection.png)

### ESP32 烧录连接

  ![安装固件](/wiki/tools/ch343p/img/CH343P-V01-esp32.png)


## 常见问题

暂无

## 更多

- [CH343P 数据手册.pdf](public/wiki/tools/ch343p/datasheet/CH343DS1.PDF)
- [购买链接 🛒](https://item.taobao.com/item.htm?ft=t&id=903678650747)
