import 'dotenv/config'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

export default {
  async load() {
    return readFileSync(join(dirname(fileURLToPath(import.meta.url)), './repository.json'), 'utf-8')
  },
}
