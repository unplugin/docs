# Supported Hooks

| Hook                                                                              |     Rollup      | Vite | webpack 4 | webpack 5 |     esbuild   | Rspack |
| ----------------------------------------------------------------------------------| :-------------: | :--: | :-------: | :-------: | :-----------: | :----: |
| [`enforce`](https://vitejs.dev/guide/api-plugin.html#plugin-ordering)             | ❌ <sup>1</sup> |  ✅  |    ✅     |    ✅     | ❌ <sup>1</sup> |   ✅   |
| [`buildStart`](https://rollupjs.org/plugin-development/#buildstart)               |       ✅        |  ✅  |    ✅     |    ✅     |       ✅        |   ✅   |
| [`resolveId`](https://rollupjs.org/plugin-development/#resolveid)                 |       ✅        |  ✅  |    ✅     |    ✅     |       ✅        |   ❌   |
| `loadInclude`<sup>2</sup>                                                         |       ✅        |  ✅  |    ✅     |    ✅     |       ✅        |   ✅   |
| [`load`](https://rollupjs.org/plugin-development/#load)                           |       ✅        |  ✅  |    ✅     |    ✅     | ✅ <sup>3</sup> |   ✅   |
| `transformInclude`<sup>2</sup>                                                    |       ✅        |  ✅  |    ✅     |    ✅     |       ✅        |   ✅   |
| [`transform`](https://rollupjs.org/plugin-development/#transform)                 |       ✅        |  ✅  |    ✅     |    ✅     | ✅ <sup>3</sup> |   ✅   |
| [`watchChange`](https://rollupjs.org/plugin-development/#watchchange)             |       ✅        |  ✅  |    ✅     |    ✅     |       ❌        |   ❌   |
| [`buildEnd`](https://rollupjs.org/plugin-development/#buildend)                   |       ✅        |  ✅  |    ✅     |    ✅     |       ✅        |   ✅   |
| [`writeBundle`](https://rollupjs.org/plugin-development/#writebundle)<sup>4</sup> |       ✅        |  ✅  |    ✅     |    ✅     |       ✅        |   ✅   |

::: details Notice
1. Rollup and esbuild do not support using `enforce` to control the order of plugins. Users need to maintain the order manually.
2. webpack's id filter is outside of loader logic; an additional hook is needed for better perf on webpack. In Rollup and Vite, this hook has been polyfilled to match the behaviors. See for the following usage examples.
3. Although esbuild can handle both JavaScript and CSS and many other file formats, you can only return JavaScript in `load` and `transform` results.
4. Currently, `writeBundle` is only serves as a hook for the timing. It doesn't pass any arguments.
:::

## Usage

```ts{8-10,12-14}
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
