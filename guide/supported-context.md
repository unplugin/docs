# Supported Context

| Context                                                                       | Rollup | Vite | webpack 4 | webpack 5 | esbuild | Rspack |
| -------------------------------------------------------------------------- | :----: | :--: | :-------: | :-------: | :-----: | :----: |
| [`this.parse`](https://rollupjs.org/plugin-development/#this-parse)                   |   ✅   |  ✅  |    ✅     |    ✅     |   ✅    |   ✅   |
| [`this.addWatchFile`](https://rollupjs.org/plugin-development/#this-addwatchfile)     |   ✅   |  ✅  |    ✅     |    ✅     |   ❌    |   ❌   |
| [`this.emitFile`](https://rollupjs.org/plugin-development/#this-emitfile)<sup>1</sup> |   ✅   |  ✅  |    ✅     |    ✅     |   ✅    |   ✅   |
| [`this.getWatchFiles`](https://rollupjs.org/plugin-development/#this-getwatchfiles)   |   ✅   |  ✅  |    ✅     |    ✅     |   ❌    |   ❌   |
| [`this.warn`](https://rollupjs.org/plugin-development/#this-warn)                     |   ✅   |  ✅  |    ✅     |    ✅     |   ✅    |   ✅   |
| [`this.error`](https://rollupjs.org/plugin-development/#this-error)                   |   ✅   |  ✅  |    ✅     |    ✅     |   ✅    |   ✅   |

::: info Notice
1. Currently, [`this.emitFile`](https://rollupjs.org/plugin-development/#thisemitfile) only supports the `EmittedAsset` variant.
:::
