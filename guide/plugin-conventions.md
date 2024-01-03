---
aside: false
---

# Plugin Conventions
- Plugins powered by `unplugin` should have a clear name with `unplugin-` prefix.
- Include `unplugin` keyword in `package.json`.
- To provide better DX, packages could export 2 kinds of entry points:

  - Default export: the returned value of `createUnplugin` function

    ```ts
    import UnpluginFeature from 'unplugin-feature'
    ```

  - Subpath exports: properties of the returned value of `createUnplugin` function for each bundler users

    ```ts
    import VitePlugin from 'unplugin-feature/vite'
    ```

  - Refer to [unplugin-starter](https://github.com/unplugin/unplugin-starter) for more details about this setup.
