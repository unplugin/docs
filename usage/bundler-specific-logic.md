# Bundler-Specific Logic

While `unplugin` provides compatible layers for some hooks, the functionality of it is limited to the common subset of the build's plugins capability. For more advanced bundler-specific usages, `unplugin` provides an escape hatch for that.

## Bundler-Specific Hooks

```ts {2,11,18,21,24,27}
export const unplugin = createUnplugin((options: UserOptions, meta) => {
  console.log(meta.framework) // 'vite' | 'rollup' | 'webpack' | 'rspack' | 'esbuild'

  return {
    // Common unplugin hooks
    name: 'unplugin-prefixed-name',
    transformInclude(id) { /* ... */ },
    transform(code) { /* ... */ },

    // Bundler specific hooks
    vite: {
      // Vite plugin
      configureServer(server) {
        // configure Vite server
      },
      // ...
    },
    rollup: {
      // Rollup plugin
    },
    webpack(compiler) {
      // Configure webpack compiler
    },
    rspack(compiler) {
      // Configure Rspack compiler
    },
    esbuild: {
      // Change the filter of onResolve and onLoad
      // onResolveFilter?: RegExp,
      // onLoadFilter?: RegExp,

      // Tell esbuild how to interpret the contents. By default unplugin tries to guess the loader
      // from file extension (eg: .js -> "js", .jsx -> 'jsx')
      // loader?: (Loader | (code: string, id: string) => Loader)

      // Or you can completely replace the setup logic
      // setup?: EsbuildPlugin.setup,
    },
  }
})
```

## Bundler-Specific Plugins

The package exports a set of functions in place of `createUnplugin` that allow for the creation of plugins for specific bundlers.
Each of the function takes the same generic factory argument as `createUnplugin`.

```ts
import {
  createEsbuildPlugin,
  createRollupPlugin,
  createRspackPlugin,
  createVitePlugin,
  createWebpackPlugin
} from 'unplugin'

const vitePlugin = createVitePlugin({ /* options */ })
const rollupPlugin = createRollupPlugin({ /* options */ })
const esbuildPlugin = createEsbuildPlugin({ /* options */ })
const webpackPlugin = createWebpackPlugin({ /* options */ })
const rspackPlugin = createRspackPlugin({ /* options */ })
```
