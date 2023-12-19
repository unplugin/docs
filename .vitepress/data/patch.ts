export function fixMdContent(content: string) {
  return content
  // https://github.com/unplugin/unplugin-vue-components/blob/main/README.md?plain=1#L66
    .replaceAll('<br>', '<br> \n')
  // https://github.com/unplugin/unplugin-icons/blob/main/README.md?plain=1#L425
    .replaceAll('versions < 2.7', 'versions &lt; 2.7')
  // https://github.com/unplugin/unplugin-vue-cssvars/blob/master/README.md?plain=1#L139
  // https://github.com/vuejs/vitepress/issues/3081
    .replaceAll('public/img.png', 'https://raw.githubusercontent.com/unplugin/unplugin-vue-cssvars/master/public/img.png')
}
