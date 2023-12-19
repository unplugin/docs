import defineConfig from '@antfu/eslint-config'

export default defineConfig({
  ignores: ['**/*.md/**', '**/dist/**', '**/cache/**', '.vitepress/data/repository.json'],
})
