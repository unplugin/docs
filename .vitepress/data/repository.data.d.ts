export interface Repository {
  name: string
  stargazers: {
    totalCount: number
  }
  owner: {
    avatarUrl: string
    login: string
  }
  description: string
  url: string
  isTemplate: boolean
  primaryLanguage: {
    name: string
    color: string
  }
  forkCount: number
}


declare const data: {
  repositories: Repository[]
}
export { data }
