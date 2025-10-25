# Arduino 使用教程

## 库安装

1. 启动 Arduino IDE
2. 打开库管理器：`Sketch` ➔ `Include Library` ➔ `Manage Libraries...`
3. 在 `Filter your search...` 字段中搜索 `Sensirion I2C SHT4x` 库，然后点击 `install` 按钮进行安装。

## 接线图

（此处可插入接线图图片）

## Example

### 低精度测量温湿度模式

以低精度测量温湿度模式去读取数据，功耗较低，响应速度更快。串口打印出获取到的温湿度数据。

<<< @/public/wiki/fpc-series/fpc-sht40/src/exampleUsage/exampleUsage.ino{cpp:line-numbers}
