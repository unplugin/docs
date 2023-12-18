import 'dotenv/config'
import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { env } from 'node:process'
import { $fetch } from 'ofetch'
import { consola } from 'consola'
import type { Repository } from './types'
import { repositories } from './meta'
import { fixMdContent } from './patch'

const gql = `#graphql
query repositoryQuery($owner: String!, $name: String!, $readme: String!) {
  repository(owner: $owner, name: $name) {
    name
    stargazers {
      totalCount
    }
    owner {
      avatarUrl
      login
    }
    description
    primaryLanguage {
      name
      color
    }
    forkCount
    object(expression: $readme) {
      ... on Blob {
        text
      }
    }
  }
}`

async function fetchRepo(meta: {
  owner: string
  name: string
  readme?: string
}) {
  const { owner, name, readme } = meta

  const _readme = readme || 'main:README.md'
  try {
    const results = await $fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query: gql,
        variables: {
          owner,
          name,
          readme: _readme,
        },
      }),
    })

    const repositoryInfo = results.data.repository as Repository

    writeFileSync(
      join(dirname(fileURLToPath(import.meta.url)), `../../showcase/${name}.md`),
      fixMdContent(repositoryInfo.object.text),
    )
    consola.success(`[${name}.md]: generate success`)
    return repositoryInfo
  }
  catch (error) {
    consola.error(`[${name}.md]: generate failed: ${error}`)
  }
}

function main() {
  const fetchs = repositories.map((repository) => {
    return fetchRepo({
      name: repository.name,
      owner: repository.owner,
      readme: repository.readme,
    })
  })

  Promise.allSettled(fetchs).then((_res) => {
    // const repoMeta = res.filter(r => r.status === 'fulfilled').map(r => r.value)
    // create a file
    // writeFileSync(join(dirname(fileURLToPath(import.meta.url)), './repository.json'), JSON.stringify(repoMeta, null, 2))
    consola.success('All files generate done!')
  })
}

main()
