import { defineConfig } from '@sujian/eslint-config'
import globals from './.eslintrc-auto-import.json' assert { type: 'json' }

export default defineConfig(
  {},
  {
    files: ['**/*.js'],
    languageOptions: {
      ...globals
    }
  }
)
