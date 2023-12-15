# Getting Started

## Overview

**Unplugin** is a library that offers an unified plugin system for various build tools. It extends the excellent [Rollup plugin API](https://rollupjs.org/plugin-development/#plugins-overview) to serve as the standard plugin interface, and provides a compatibility layer based on the build tools employed.

**Unplugin** current supports:

- [Vite](https://vitejs.dev/)
- [Rollup](https://rollupjs.org/)
- [Webpack](https://webpack.js.org/)
- [esbuild](https://esbuild.github.io/)
- [Rspack](https://www.rspack.dev/) <span style="color: #ca8a04"><strong>(⚠️ experimental)</strong></span>

## Trying It Online

You can try Unplugin in your browser directly.

[![open](/open_in_codeflow.svg)](https://stackblitz.com/~/github.com/yuyinws/unplugin-starter?file=src/index.ts)

## Creating an Unplugin package

```shell
npx degit unplugin/unplugin-starter my-unplugin
```
> Check the [unplugin-starter](https://github.com/unplugin/unplugin-starter) repository for more details.
