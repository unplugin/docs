# Getting Started

## Overview

**Unplugin** is a library that offers an unified plugin system for various build tools. It extends the excellent [Rollup plugin API](https://rollupjs.org/plugin-development/#plugins-overview) to serve as the standard plugin interface, and provides a compatibility layer based on the build tools employed.

**Unplugin** current supports:

- [Vite](https://vitejs.dev/)
- [Rollup](https://rollupjs.org/)
- [Webpack](https://webpack.js.org/)
- [esbuild](https://esbuild.github.io/)
- [Rspack](https://www.rspack.dev/) <span style="color: #ca8a04"><strong>(⚠️ experimental)</strong></span>

## Trying Unplugin Online

[![open](https://developer.stackblitz.com/img/open_in_codeflow.svg)](https://stackblitz.com/~/github.com/yuyinws/unplugin-starter?file=src/index.ts)

## Creating the first Unplugin package


### [Starter template](https://github.com/unplugin/unplugin-starter)
```shell
npx degit unplugin/unplugin-starter my-unplugin
```

### Manual

::: code-group

```bash [npm]
npm install unplugin
```

```bash [yarn]
yarn add unplugin
```

```bash [pnpm]
pnpm add unplugin
```

```bash [bun]
bun add unplugin
```

:::

```ts
import { createUnplugin } from 'unplugin'

export const unplugin = createUnplugin((options: UserOptions) => {
  return {
    name: 'unplugin-prefixed-name',
    // webpack's id filter is outside of loader logic,
    // an additional hook is needed for better perf on webpack
    transformInclude(id) {
      return id.endsWith('.vue')
    },
    // just like rollup transform
    transform(code) {
      return code.replace(/<template>/, '<template><div>Injected</div>')
    },
    // more hooks coming
  }
})

export const vitePlugin = unplugin.vite
export const rollupPlugin = unplugin.rollup
export const webpackPlugin = unplugin.webpack
export const rspackPlugin = unplugin.rspack
export const esbuildPlugin = unplugin.esbuild
```
