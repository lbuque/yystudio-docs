import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ProductCard from './components/ProductCard.vue'
import EspWebInstaller from './components/EspWebInstaller.vue'
import ImageGallery from './components/ImageGallery.vue'
import EspFlasherNew from './components/EspFlasherNew.vue'
import ThingsTable from './components/ThingsTable.vue'
// @ts-ignore
import imageViewer from '@miletorix/vitepress-image-viewer'
// @ts-ignore
import '@miletorix/vitepress-image-viewer/style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProductCard', ProductCard)
    app.component('EspWebInstaller', EspWebInstaller)
    app.component('ImageGallery', ImageGallery)
    app.component('EspFlasherNew', EspFlasherNew)
    app.component('ThingsTable', ThingsTable)
    imageViewer(app)
  }
} satisfies Theme
