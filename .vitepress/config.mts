import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// 检查 SSL 证书文件是否存在
const sslKeyPath = path.resolve(__dirname, '../.ssl/localhost-key.pem')
const sslCertPath = path.resolve(__dirname, '../.ssl/localhost.pem')
const hasSSL = fs.existsSync(sslKeyPath) && fs.existsSync(sslCertPath)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "YYStudio",
  description: "让 DIY 变得更有乐趣",
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/icon/favicon.ico' }]],
  ignoreDeadLinks: [
    // 忽略压缩文件的死链接检查
    /\.rar$/,
    /\.zip$/,
    /\.7z$/
  ],
  vite: {
    server: hasSSL ? {
      https: {
        key: fs.readFileSync(sslKeyPath),
        cert: fs.readFileSync(sslCertPath),
      },
      host: 'localhost',
      port: 5173
    } : {
      host: 'localhost',
      port: 5173
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon/yy-logo-1.svg',
    nav: [
      { text: '主页', link: '/' },
      { text: '产品文档', link: '/wiki' },
      { text: '淘宝店铺 🛒', link: 'https://shop71031876.taobao.com/' }
    ],
    sidebar: [
      {
        text: '开发板',
        // link: '/wiki/controller',
        collapsed: true,
        items: [
          {
            text: 'Spark-C3',
            link: '/wiki/controller/spark-c3',
            collapsed: true,
            items: [
              { text: 'Home Assistant', link: '/wiki/controller/spark-c3/home-assistant' },
              { text: 'USB Power模块(适用于继电器控制)', link: '/wiki/controller/spark-c3/usb-power' }
            ]
          },
          {
            text: 'ESP32-C3 TFT Devkit',
            link: '/wiki/controller/esp32-c3-tft-devkit',
            collapsed: true,
            items: [
              { text: 'Arduino 入门', link: '/wiki/controller/esp32-c3-tft-devkit/arduino' },
              { text: 'ESP-IDF 入门', link: '/wiki/controller/esp32-c3-tft-devkit/esp-idf' },
              { text: 'PlatformIO 入门', link: '/wiki/controller/esp32-c3-tft-devkit/platformio' },
              { text: 'MicroPython 入门', link: '/wiki/controller/esp32-c3-tft-devkit/micropython' }
            ]
          }
        ]
      },
      {
        text: '传感器(FPC)',
        // link: '/wiki/fpc-sensor',
        collapsed: true,
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
        collapsed: true,
        items: [
          {
            text: 'OM15020-JN5169',
            link: '/wiki/zigbee-series/om15020-jn5169',
            collapsed: true,
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
            collapsed: true,
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
      },
      {
        text: "工具与下载器",
        collapsed: true,
        items: [
          {
            text: 'Tiny Serial',
            link: '/wiki/tools/tiny-serial'
          },
          {
            text: 'CH343P 高速下载器',
            link: '/wiki/tools/ch343p'
          }
        ]
      },
      {
        text: "集成模块",
        collapsed: true,
        items: [
          {
            text: 'IMU Module',
            link: '/wiki/module-series/imu-module'
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
