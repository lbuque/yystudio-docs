# Arduino 入门

## 软件设置

1. 根据您的操作系统下载并安装最新版本的Arduino IDE

    | [![](/icon/windows.png)](https://downloads.arduino.cc/arduino-ide/arduino-ide_latest_Windows_64bit.exe) | [![](/icon/linux.png)](https://downloads.arduino.cc/arduino-ide/arduino-ide_latest_Linux_64bit.AppImage) | [![](/icon/macos.png)](https://downloads.arduino.cc/arduino-ide/arduino-ide_latest_macOS_64bit.dmg) |
    | -- | -- | -- |
    | [Windows](https://downloads.arduino.cc/arduino-ide/arduino-ide_latest_Windows_64bit.exe) | [Linux](https://downloads.arduino.cc/arduino-ide/arduino-ide_latest_Linux_64bit.AppImage) | [MacOS](https://downloads.arduino.cc/arduino-ide/arduino-ide_latest_macOS_64bit.dmg) |

    如果下载缓慢可以在国内Arduino社区下载 [ArduinoIDE下载地址](https://arduino.me/download)

2. 启动 Arduino 应用程序

3. 在 Arduino IDE 导航到 ``File`` > ``Preferences`` ，然后使用以下 url 填写 ``Additional Boards Manager URL`` ：

    ```
    https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
    ```

4. 导航到 ``Tools`` > ``Board`` > ``Boards Manager...`` ，在搜索框中输入关键字 ``esp32``，选择最新版本的esp32并安装它。


5. 导航到 ``Tools`` > ``Board`` > ``ESP32 Arduino`` 并选择 ``ESP32C3 Dev Module``。板的列表有点长，你需要滚动到底部才能到达它。

6. 导航到 ``工具`` > ``端口``，然后选择所连接的 ``ESP32-C3 TFT Devkit`` 的串口名称。这可能是 COM3 或更高版本（COM1和COM2通常保留用于硬件串行端口）。
