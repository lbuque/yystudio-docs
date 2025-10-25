# Temperature And Humidity Monitor

主控板通过杜邦线连接转接板，读取温度和湿度，并在 OLED 屏幕上显示。

## Things used in this project

### Hardware components

<ThingsTable
    :sections="[
        {
            items: [
                {
                    name: 'FPC-SHT30',
                    subtitle: '温湿度传感器',
                    url: '/wiki/fpc-sensor/fpc-sht30',
                    quantity: 1,
                    image: '/wiki/fpc-series/fpc-sht30/img/FPC-SHT30.png'
                },
                {
                    name: '主控板 (ESP32/ESP32-C3)',
                    subtitle: '兼容 Grove 接口',
                    url: '/wiki/controller/esp32-c3-tft-devkit',
                    quantity: 1,
                    image: '/wiki/controller/C003-ESP32-C3-TFT-DevKit/img/esp32-c3-tft-devkit-main.png'
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
                }
            ]
        }
    ]"
/>

## Schematics

![](/wiki/fpc-series/fpc-sht30/img/temperature_and_humidity_monitor/schematics.jpg)

## Firmware

使用下面的工具可以直接在浏览器中烧录预编译的固件到 ESP32-C3 TFT Devkit 开发板，无需安装任何软件：

<EspFlasherNew 
  :firmware-options="[
    {
      id: 'Temperature And Humidity Monitor (SHT30)',
      name: 'Temperature And Humidity Monitor (SHT30) v0.1',
      version: 'v0.1',
      description: '适用于 ESP32-C3-TFT-DevKit, SDA=GPIO8, SCL=GPIO10',
      url: '/wiki/fpc-series/fpc-sht30/example/temperature_and_humidity_monitor/fpc-sensor-probe-sht30_0x0.bin',
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

- [下载源代码 (SensorMonitor.zip)](/wiki/fpc-series/fpc-sht30/example/temperature_and_humidity_monitor/SensorMonitor.zip)
