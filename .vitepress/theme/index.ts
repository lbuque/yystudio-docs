import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ProductCard from './components/ProductCard.vue'
import EspWebInstaller from './components/EspWebInstaller.vue'
import ImageGallery from './components/ImageGallery.vue'
import EspFlasher from './components/EspFlasher.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProductCard', ProductCard)
    app.component('EspWebInstaller', EspWebInstaller)
    app.component('ImageGallery', ImageGallery)
    app.component('EspFlasher', EspFlasher)
  }
} satisfies Theme
