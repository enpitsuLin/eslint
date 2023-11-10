import { GLOB_YAML } from '../globs'
import { parserYml, pluginYml } from '../plugins'
import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'

export const yml: FlatESLintConfigItem[] = [
  {
    files: [GLOB_YAML],
    languageOptions: {
      parser: parserYml,
    },
    plugins: {
      //@ts-expect-error
      yml: pluginYml,
    },
    rules: {
      ...(pluginYml.configs.standard.rules as Rules),
      ...(pluginYml.configs.prettier.rules as Rules),
      'yml/no-empty-mapping-value': 'off',
    },
  },
]
