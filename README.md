# 📄 Documentation for Unplugin

## Development

This project use [GitHub GraphQL API](https://docs.github.com/en/graphql) to generate the showcase data. So you need to create a [GitHub Personal Access Token](https://github.com/settings/personal-access-tokens/new) first.

```bash
cp .env.example .env
```

```ini
# .env
GITHUB_TOKEN=<YOUR_TOKEN>
```

### Generate files

```bash
pnpm gen-files
```
