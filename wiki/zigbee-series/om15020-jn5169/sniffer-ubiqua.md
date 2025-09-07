# Ubiqua 抓包

## 烧录 sniffer 固件

参考 [固件烧录](flash.md) 中的说明，烧录 `JennicSniffer_JN5169_1000000.bin` 固件到 **OM15020-JN5169** 中。

## 安装 Ubiqua

[Ubiqua](https://www.ubilogix.com/ubiqua/) 是一个网络抓包工具。请在 [Ubiqua](https://www.ubilogix.com/ubiqua/) 下载并安装最新版本的 **Ubiqua**。

## 开始使用 Ubiqua

1. 添加 OM15020-JN5169 设备

    ![添加设备](/wiki/zigbee-series/om15020-jn5169/img/sniffer-ubiqua/add-device.png)

2. 选中设备，右键选择协议栈

   ![选择协议栈](/wiki/zigbee-series/om15020-jn5169/img/sniffer-ubiqua/protocol-stack.png)

3. 选中设备，右键选择信道

    > 信道需与网关的信道设置一致，才能捕获到网关所在的 ZigBee 网络数据包。

    ![选择信道](/wiki/zigbee-series/om15020-jn5169/img/sniffer-ubiqua/channel.png)

4. 打开开关

    ![开关](/wiki/zigbee-series/om15020-jn5169/img/sniffer-ubiqua/on.png)

5. 开始抓 ZigBee 数据包

    打开 `Tool` → `Options...` → `Security`，配置 `Application or Trust Center Link Key` Key: `5A6967426565416C6C69616E63653039`

    ![安全选项](/wiki/zigbee-series/om15020-jn5169/img/sniffer-ubiqua/options.png)

6. 捕获到协调器节点

    ![协调器节点](/wiki/zigbee-series/om15020-jn5169/img/sniffer-ubiqua/sniffer-1.png)

7. 添加一个 ZigBee 子设备

    ![添加子设备](/wiki/zigbee-series/om15020-jn5169/img/sniffer-ubiqua/sniffer-1.png)

> 数据包显示有彩色，说明 key 设置正确，才能成功解密数据包。如果数据包全为灰色黑色，说明 key 设置不对。
