# GetSensorData

主控板通过 Grove 线连接 IMU-Module，读取出加速度值、角速度值和地磁值，并通过主控板的串口打印出这些信息。

在 vofa+ 软件上进行配置，可以对 IMU-Module 的数据进行姿态解算。

## Things used in this project

### Hardware components

<ThingsTable
    :sections="[
        {
            items: [
                {
                    name: 'IMU-Module (9-DoF)',
                    subtitle: 'Grove 接口惯性测量单元',
                    url: '/wiki/module-series/imu-module',
                    quantity: 1,
                    image: '/wiki/module-series/imu-module/img/imu-main.png'
                },
                {
                    name: '主控板 (ESP32/ESP32-C3)',
                    subtitle: '兼容 Grove 接口',
                    url: '/wiki/controller/esp32-c3-tft-devkit',
                    quantity: 1,
                    image: '/wiki/controller/C003-ESP32-C3-TFT-DevKit/img/esp32-c3-tft-devkit-main.png'
                },
                {
                    name: 'Grove 连接线',
                    quantity: 1,
                    image: '/wiki/common/assets/grove-cable.jpg'
                }
            ]
        }
    ]"
/>

### Software apps and online services

<ThingsTable
    :sections="[
        {
            items: [
                {
                    name: 'Arduino IDE',
                    url: 'https://www.arduino.cc/en/software',
                    image: '/icon/arduino.svg',
                    notes: '用于编译与烧录示例代码'
                },
                {
                    name: 'Vofa+',
                    url: 'https://www.vofa.plus/',
                    image: '/icon/vofa+.svg',
                    notes: '用于波形与姿态解算可视化'
                }
            ]
        }
    ]"
/>


## Story

## Schematics

## Firmware

使用下面的工具可以直接在浏览器中烧录预编译的固件到 ESP32-C3 TFT Devkit 开发板，无需安装任何软件：

<EspFlasherNew 
  :firmware-options="[
    {
      id: 'GetSensorData',
      name: 'GetSensorData v0.1',
      version: 'v0.1',
      description: '适用于 ESP32-C3-TFT-DevKit',
      url: '/wiki/module-series/imu-module/example/GetSensorData/GetSensorData_v1.0_20251004_0x0.bin',
      address: 0x0000,
      size: '4.0MB'
    }
  ]"
  :baud-rate="921600"
/>

::: tip 使用说明和故障排查
如果出现无法烧录等情况，请参考 [ESP Flasher 使用说明](/faq/espflasher.md)
:::

## Code

<<< @/public/wiki/module-series/imu-module/example/GetSensorData/GetSensorData.ino{c++}
