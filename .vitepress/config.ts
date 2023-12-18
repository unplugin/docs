import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import { description, ogImage, title } from './constance'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title,
  description,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
      { text: 'Showcase', link: '/showcase/', activeMatch: '/showcase/' },
    ],
    search: {
      provider: 'local',
    },

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Plugin Installation', link: '/guide/plugin-installation' },
          ],
        },
        {
          text: 'Usage',
          items: [
            { text: 'Supported Hooks', link: '/guide/supported-hooks' },
            { text: 'Supported Context', link: '/guide/supported-context' },
            { text: 'Nested Plugins', link: '/guide/nested-plugins' },
            { text: 'Bundler-Specific Logic', link: '/guide/bundler-specific-logic' },
          ],
        },
        {
          text: 'Conventions',
          link: '/guide/conventions',
        },
      ],
      '/showcase/': [
        {
          text: 'Showcase',
          link: '/showcase/',
          items: [
            { text: 'unplugin-1', link: '/showcase/unplugin-1' },
          ],
        },
      ],
    },

    // sidebar: [
    //   {
    //     text: 'Guide',
    //     items: [
    //       { text: 'Getting Started', link: '/guide/getting-started' },
    //       { text: 'Plugin Installation', link: '/guide/plugin-installation' }
    //     ]
    //   },
    //   {
    //     text: 'Usage',
    //     items: [
    //       { text: 'Supported Hooks', link: '/usage/supported-hooks' },
    //       { text: 'Supported Context', link: '/usage/supported-context' },
    //       { text: 'Nested Plugins', link: '/usage/nested-plugins' },
    //       { text: 'Bundler-Specific Logic', link: '/usage/bundler-specific-logic' }
    //     ]
    //   },
    //   {
    //     text: 'Showcase',
    //     link: '/showcase'
    //   },
    //   {
    //     text: 'Conventions',
    //     link: '/conventions'
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/unjs/unplugin' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright (c) 2021-PRESENT Nuxt Contrib',
    },
  },
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/logo_auto_toggle.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Nuxt Contrib' }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],
  ],
  vite: {
    plugins: [
      Components({
        include: [/\.vue/, /\.md/],
        dirs: '.vitepress/components',
        dts: '.vitepress/components.d.ts',
      }),
      Unocss(fileURLToPath(new URL('./uno.config.ts', import.meta.url))),
      Icons(),
    ],
  },
})
