import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "unplugin",
  description: "unplguin website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
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
          { text: 'Hooks', link: '/usage/hooks' },
          { text: 'Nested Plugins', link: '/usage/nested-plugins' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/unjs/unplugin' }
    ]
  }
})
