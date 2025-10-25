# Arduino 使用教程

## 库安装

1. 启动 Arduino IDE
2. 打开库管理器：`Sketch` ➔ `Include Library` ➔ `Manage Libraries...`
3. 在 `Filter your search...` 字段中搜索 `Sensirion I2C SHT3X` 库，然后点击 `install` 按钮进行安装。

## 接线图

（此处可插入接线图图片）

## Example

### 单次测量温湿度模式

单次测量模式：控制板发送一次采集命令，传感器采集一次数据。此模式可根据需要读取数据，功耗较低。

<<< @/public/wiki/fpc-series/fpc-sht30/src/exampleUsageSingleShot/exampleUsageSingleShot.ino{cpp:line-numbers}

结果：串口打印出获取到的温湿度数据。

### 周期测量温湿度模式

周期测量模式：传感器按照设定采集频率自动采集数据。

<<< @/public/wiki/fpc-series/fpc-sht30/src/exampleUsage/exampleUsage.ino{cpp:line-numbers}


结果：串口前10S打印周期测量模式下获取的温湿度数据，10S后退出周期测量模式，进入单次测量模式，打印单次测量模式下获取的温湿度数据。
