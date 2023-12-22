import { basename } from 'node:path'
import type { Plugin } from 'vite'
import { repositoryMeta } from '../data/meta'

const repos = repositoryMeta.map(({ name }) => `${name}`)

export function MarkdownTransform(): Plugin {
  return {
    name: 'unplugin-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      // only transform markdown on meta files
      if (!repos.includes(basename(id, '.md')))
        return null

      // https://github.com/unplugin/unplugin-vue-components/blob/main/README.md?plain=1#L66
      // Manual add line break
      code = code.replaceAll('<br>', '<br> \n')

      // https://github.com/unplugin/unplugin-icons/blob/main/README.md?plain=1#L425
      code = code.replaceAll('versions < 2.7', 'versions &lt; 2.7')

      // replace markdown img link,
      // code reference: https://github.com/unjs/ungh/blob/main/utils/markdown.ts
      const MARKDOWN_LINK_RE = /(?<link>\[.*?]\((?<url>.*?)\)|<img.*?src="(?<url2>.*?)".*?>)/g
      const GH_RAW_URL = 'https://raw.githubusercontent.com'
      const { name, owner, defaultBranch } = repositoryMeta.find(({ name }) => name === basename(id, '.md'))!
      const _defaultBranch = defaultBranch || 'main'
      code = code.replaceAll(MARKDOWN_LINK_RE, (match, _, url: string | undefined, url2: string) => {
        const path = url || url2
        // If path is already a URL, return the match
        if (path.startsWith('http') || path.startsWith('https'))
          return match

        return match.replace(path, `${GH_RAW_URL}/${owner}/${name}/${_defaultBranch}/${path.replace(/^\.\//, '')}`)
      })

      return code
    },
  }
}
