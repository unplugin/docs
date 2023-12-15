# Nested Plugins

Since `v0.10.0`, unplugin supports constructing multiple nested plugins to behave like a single one.

## Bundler Supported
|         Rollup         | Vite | Webpack 4 | Webpack 5 | Rspack |    esbuild     |
| :--------------------: | :--: | :-------: | :-------: | :----: | :------------: |
| ✅ `>=3.1`<sup>1</sup> |  ✅  |    ✅     |    ✅     |   ✅   | <span style="color: #ca8a04">⚠️</span><sup>2</sup> |

::: details Notice
1. Rollup supports nested plugins since [v3.1.0](https://github.com/rollup/rollup/releases/tag/v3.1.0). Plugin author should ask users to have a Rollup version of `>=3.1.0` when using nested plugins. For single plugin format, unplugin works for any version of Rollup.
2. Since esbuild does not have a built-in transform phase, the `transform` hook of the nested plugin will not work on esbuild yet. Other hooks like `load` or `resolveId` work fine. We will try to find a way to support it in the future.
:::

## Usage
```ts
import { createUnplugin } from 'unplugin'

export const unplugin = createUnplugin((options: UserOptions) => {
  return [
    {
      name: 'plugin-a',
      transform(code) {
        // ...
      },
    },
    {
      name: 'plugin-b',
      resolveId(id) {
        // ...
      },
    },
  ]
})
```
