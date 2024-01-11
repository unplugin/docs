// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import 'uno.css'
import './style.css'
import TwoSlashFloatingVue from 'vitepress-plugin-twoslash/client'
import CustomLayout from './CustomLayout.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(CustomLayout)
  },
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(TwoSlashFloatingVue as any)
  },
}
