import { defineConfig } from 'vitepress'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import Icons from 'unplugin-icons/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "unplugin",
  description: "unplguin website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
      { text: 'Showcase', link: '/showcase' }
    ],
    search: {
      provider: 'local'
    },

    logo: '/logo.svg',

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Plugin Installation', link: '/guide/plugin-installation' }
        ]
      },
      {
        text: 'Usage',
        items: [
          { text: 'Supported Hooks', link: '/usage/supported-hooks' },
          { text: 'Supported Context', link: '/usage/supported-context' },
          { text: 'Nested Plugins', link: '/usage/nested-plugins' },
          { text: 'Bundler-Specific Logic', link: '/usage/bundler-specific-logic' }
        ]
      },
      {
        text: 'Showcase',
        link: '/showcase'
      },
      {
        text: 'Conventions',
        link: '/conventions'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/unjs/unplugin' }
    ]
  },
  vite: {
    plugins: [
      Components({
        include: [/\.vue/, /\.md/],
        dirs: '.vitepress/components',
        dts: '.vitepress/components.d.ts',
      }),
      Unocss({
        presets: [
          presetUno(),
          presetAttributify(),
          presetIcons({
            scale: 1.2,
          }),
        ],
      }),
      Icons()
    ]
  }
})
