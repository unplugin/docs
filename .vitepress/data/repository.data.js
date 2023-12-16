import 'dotenv/config'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { env } from 'node:process'
import { $fetch } from 'ofetch'

const gql = `#graphql
query {
  organization(login: "unplugin") {
    repositories(first: 10, orderBy: {field: STARGAZERS, direction: DESC}) {
      nodes {
        name
        stargazers {
          totalCount
        }
        owner {
          avatarUrl
          login
        }
        isTemplate
        description
        url
        primaryLanguage {
          name
          color
        }
        forkCount
      }
    }
  }
}`

export default {
  async load() {
    try {
      const results = await $fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${env.GITHUB_TOKEN}`,
        },
        body: JSON.stringify({
          query: gql,
        }),
      })

      if (results.data) {
        return {
          repositories: results.data.organization.repositories.nodes?.filter(repo => repo.name.includes('unplugin') && !repo.isTemplate),
        }
      }
      else {
        return readFileSync(join(dirname(fileURLToPath(import.meta.url)), './repository_back.json'), 'utf-8')
      }
    }
    catch (error) {
      return readFileSync(join(dirname(fileURLToPath(import.meta.url)), './repository_back.json'), 'utf-8')
    }
  },
}
