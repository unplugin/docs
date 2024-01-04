// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import 'uno.css'
import './style.css'
import CustomLayout from './CustomLayout.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(CustomLayout)
  },
  enhanceApp() {
    // ...
  },
} satisfies Theme
