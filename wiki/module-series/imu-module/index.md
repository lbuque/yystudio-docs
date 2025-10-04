# IMU Module

<ImageGallery
  :images="[
    { src: '/wiki/module-series/imu-module/img/imu-overview.png' },
    { src: '/wiki/module-series/imu-module/img/imu-main.png' },
    { src: '/wiki/module-series/imu-module/img/imu-size.png' },
    { src: '/wiki/module-series/imu-module/img/imu-include.png' },
  ]"
/>

## 简介

IMU Module 是一款9轴的惯性运动测量单元，采用六轴姿态传感器(BMI270)、三轴地磁式传感器 (BMM150)的方案，测量和检测物体的加速度和角速度 、地磁场方向和强度，可以通过 I2C 接口进行通讯, 可以按需选择 Grove 线和主控板连接或者采用杜邦线与主控板连接。广泛应用于导航 、自动化控制 、机器人技术 、飞行器导航 、地理定位等领域。

## 产品特性

- 多种惯性运动数据测量
- 高精度测量
- I2C 通讯接口
- Pmod 通讯接口

## 包装信息

- IMU Module * 1
- Grove Cable 20CM * 1
- XH2.54 6P Header SMD * 1
- Grove to Dupont 2.54 20CM * 1

![](/wiki/module-series/imu-module/img/imu-include.png)


## 规格参数

| 规格     | 参数.  |
| :------: | :----: |
| 六轴姿态传感器 (BMI270) | 精度：0.05% (加速度)，0.05°/s (角速度)<br>I2C 地址：0x68 |
| 三轴地磁式传感器 (BMM150) | 精度：0.3 μT<br>I2C 地址：0x10 |
| 产品尺寸 | 40.0 x 24.0 mm |
| 产品重量 | 3.1g |
| 包装尺寸 | 80 x 120 mm |
| 毛重 | 6.6g |

## 引脚说明

![](/wiki/module-series/imu-module/img/imu-pinmap.png)

| 规格     | 参数.  |
| :------: | :----: |
| VCC      | 电源正极 |
| GND      | 电源负极 |
| SDA      | 数据线   |
| SCL      | 时钟线   |
| INT      | 中断1 |
| INT      | 中断2 |

## 原理图

- [IMU Module 原理图](/wiki/module-series/imu-module/hardware/M001_BMI270-BMM150_SCH.pdf)

## 尺寸图

![](/wiki/module-series/imu-module/img/imu-size.png)

## 数据手册

- [BMI270 数据表](/wiki/module-series/imu-module/datasheet/bst-bmi270-ds000.pdf)
- [BMM150 数据表](/wiki/module-series/imu-module/datasheet/bst-bmm150-ds001.pdf)

## 软件平台

### Arduino

- [Arduino_BMI270_BMM150](https://github.com/lbuque/Arduino_BMI270_BMM150.git)
- [GetSensorData](get-sensor-data.md)

## 常见问题

### Q: 在 Arduino IDE 无法读取 BMM150 的测量数据，BMI270 能正常读取测试数据

- IMU Module 的 BMI270 和 BMM150 使用级联的方式，主控板通过 I2C 与 BMI270 进行通讯，BMI270再通过 Sensor Hub 驱动 BMM150 进行采集数据。
- 请确认 Arduino_BMI270_BMM150 库安装是否正确，安装 Arduino_BMI270_BMM150 请参考 [Arduino_BMI270_BMM150]()

## 更多

- [购买链接 🛒](https://item.taobao.com/item.htm?id=945023296628&)
