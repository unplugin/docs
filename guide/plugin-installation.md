# Plugin Installation

## Install package

::: code-group

```bash [npm]
npm install unplugin-starter --save-dev
```

```bash [yarn]
yarn add unplugin-starter -D
```

```bash [pnpm]
pnpm add unplugin-starter -D 
```

```bash [bun]
bun add unplugin-starter -D
```
:::

## Bundler & Framework Integration

::: code-group

```ts [Vite]
// vite.config.ts
import Starter from 'unplugin-starter/vite'

export default defineConfig({
  plugins: [
    Starter({ /* options */ }),
  ],
})
```


```js [Rollup]
// rollup.config.js
import Starter from 'unplugin-starter/rollup'

export default {
  plugins: [
    Starter({ /* options */ }),
  ],
}
```


```js [Webpack]
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-starter/webpack')({ /* options */ })
  ]
}
```

```js [Rspack]
// rspack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-starter/rspack')({ /* options */ })
  ]
}
```


```js [Esbuild]
// esbuild.config.js
import { build } from 'esbuild'
import Starter from 'unplugin-starter/esbuild'

build({
  plugins: [Starter()],
})
```

```js [Vue-Cli]
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-starter/webpack')({ /* options */ }),
    ],
  },
}
```

```js [Nuxt]
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    ['unplugin-starter/nuxt', { /* options */ }],
  ],
})
```

```js [Astro]
// astro.config.mjs
import { defineConfig } from 'astro/config';
import Starter from 'unplugin-turbo-console/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [
    Starter()
  ]
});
```
