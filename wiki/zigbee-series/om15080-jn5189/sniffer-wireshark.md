# Wireshark 抓包

## 烧录 sniffer 固件

参考 [固件烧录](flash.md) 中的说明，烧录 `Sniffer_jn5189_1000000baud_8N1_NoFlowControl.bin` 固件到 **om15080-jn5189** 中。

## 安装 Wireshark

[Wireshark](https://www.wireshark.org/) 是一个网络抓包工具。请在 [WireShark](https://www.wireshark.org/) 下载并安装最新版本的 **Wireshark**。

## 安装辅助工具

安装 [Kinetis_Protocol_Analyzer_Adapter.exe](public/wiki/zigbee-series/om15080-jn5189/software/Kinetis_Protocol_Analyzer_Adapter.exe) 到电脑上，如果电脑安装了 npcap，需要卸载掉。

## 打开 WireShark

1. 打开 Kinetis_Protocol_Analyzer_Adapter，进入如下界面：

    ![协议分析适配器界面](/wiki/zigbee-series/om15080-jn5189/img/sniffer-wireshark/protocol-analyzer-adapter.png)

2. 选择需要捕获的信道

    ![选择信道](/wiki/zigbee-series/om15080-jn5189/img/sniffer-wireshark/select-channel.png)

3. 点击按钮，打开 **WireShark**

    ![打开 Wireshark](/wiki/zigbee-series/om15080-jn5189/img/sniffer-wireshark/open-wireshark.png)

## 设置 Trust Center Link Key

在 **Wireshark** 中配置 ZigBee 默认的 Link Key，否则无法解析加密网络内容。

通过 `Edit` → `Preferences` → `Protocols` → `ZigBee` 菜单配置 16 字节的 `Trust Center Link Key={5A:69:67:42:65:65:41:6C:6C:69:61:6E:63:65:30:39}`

![Wireshark首选项](/wiki/zigbee-series/om15080-jn5189/img/sniffer-wireshark/Preferences.png)

![Trust Center Link Key 设置](/wiki/zigbee-series/om15080-jn5189/img/sniffer-wireshark/TrustCenterLinkKey.png)

下面是通过 **Wireshark** 解析 ZigBee 数据包的截图，可以将 ZigBee 的各个字段进行详细解析。

![ZigBee数据包解析](/wiki/zigbee-series/om15080-jn5189/img/sniffer-wireshark/ZigBeePackage.png)

## 抓取分析 IEEE802.15.4/Thread 协议

由于 Thread 与 ZigBee 都是基于 IEEE802.15.4 MAC，所以这个工具也可以通过 **Wireshark** 解析 Thread 协议。

![Thread协议解析](/wiki/zigbee-series/om15080-jn5189/img/sniffer-wireshark/ThreadPackage.png)
