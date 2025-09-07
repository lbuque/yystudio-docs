import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "YYStudio",
  description: "让 DIY 变得更有乐趣",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '产品文档', link: '/wiki' },
      { text: '淘宝店铺 🛒', link: 'https://shop71031876.taobao.com/' }
    ],

    sidebar: [
      {
        text: '开发板',
        // link: '/wiki/controller',
        collapsed: false,
        items: [
          {
            text: 'Spark-C3',
            link: '/wiki/controller/spark-c3',
            collapsed: false,
            items: [
              { text: 'Home Assistant', link: '/wiki/controller/spark-c3/home-assistant' },
              { text: 'USB Power模块(适用于继电器控制)', link: '/wiki/controller/spark-c3/usb-power' }
            ]
          }
        ]
      },
      {
        text: '传感器(FPC)',
        // link: '/wiki/fpc-sensor',
        collapsed: false,
        items: [
          {
            text: 'FPC-SHT30',
            link: '/wiki/fpc-sensor/fpc-sht30'
          },
          {
            text: 'FPC-SHT40',
            link: '/wiki/fpc-sensor/fpc-sht40'
          },
          {
            text: 'FPC-OPT3001',
            link: '/wiki/fpc-sensor/fpc-opt3001'
          }
        ]
      },
      {
        text: 'Zigbee 系列',
        // link: '/wiki/zigbee-series',
        collapsed: false,
        items: [
          {
            text: 'OM15020-JN5169',
            link: '/wiki/zigbee-series/om15020-jn5169',
            collapsed: false,
            items: [
              { text: '安装驱动', link: '/wiki/zigbee-series/om15020-jn5169/install-driver' },
              { text: '固件烧录', link: '/wiki/zigbee-series/om15020-jn5169/flash' },
              { text: 'Wireshark 嗅探器', link: '/wiki/zigbee-series/om15020-jn5169/sniffer-wireshark' },
              { text: 'Ubiqua 嗅探器', link: '/wiki/zigbee-series/om15020-jn5169/sniffer-ubiqua' },
              { text: 'ZGWUI 工具', link: '/wiki/zigbee-series/om15020-jn5169/zgwui' },
              { text: 'Home Assistant 集成', link: '/wiki/zigbee-series/om15020-jn5169/home-assistant' },
              { text: 'Zigbee2MQTT 集成', link: '/wiki/zigbee-series/om15020-jn5169/zigbee2mqtt' },
              { text: '资源下载', link: '/wiki/zigbee-series/om15020-jn5169/resource' }
            ]
          },
          {
            text: 'OM15080-JN5189',
            link: '/wiki/zigbee-series/om15080-jn5189',
            collapsed: false,
            items: [
              { text: '安装驱动', link: '/wiki/zigbee-series/om15080-jn5189/install-driver' },
              { text: '固件烧录', link: '/wiki/zigbee-series/om15080-jn5189/flash' },
              { text: 'Wireshark 嗅探器', link: '/wiki/zigbee-series/om15080-jn5189/sniffer-wireshark' },
              { text: 'Ubiqua 嗅探器', link: '/wiki/zigbee-series/om15080-jn5189/sniffer-ubiqua' },
              { text: 'ZGWUI 工具', link: '/wiki/zigbee-series/om15080-jn5189/zgwui' },
              { text: '资源下载', link: '/wiki/zigbee-series/om15080-jn5189/resource' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      copyright: 'Copyright © 2025 YYStudio'
    },
    search: {
      provider: 'local'
    }
  }
})
