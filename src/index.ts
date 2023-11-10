import { hasTypeScript, hasVue } from './utils'
import {
  comments,
  ignores,
  imports,
  javascript,
  jsonc,
  markdown,
  prettier,
  sortKeys,
  sortPackageJson,
  sortTsconfig,
  typescript,
  unicorn,
  vue,
  yml,
} from './configs'
import type { FlatESLintConfigItem } from 'eslint-define-config'

export const presetJavaScript = [
  ...ignores,
  ...javascript,
  ...comments,
  ...imports,
  ...unicorn,
]
export const presetTypeScript = [
  ...presetJavaScript,
  ...typescript
]

export const presetJsonc = [...jsonc, ...sortPackageJson, ...sortTsconfig]
export const presetLangsExtensions = [...markdown, ...yml, ...presetJsonc]

export const all = [
  ...presetJavaScript,
  ...presetLangsExtensions,
  ...sortKeys,
  ...vue,
  ...prettier,
]

export function defineConfig(
  config: FlatESLintConfigItem | FlatESLintConfigItem[] = [],
  {
    vue: enableVue = hasVue,
    prettier: enablePrettier = true,
    markdown: enableMarkdown = true,
    sortKeys: enableSortKeys = true,
    typescript: enableTypescript = hasTypeScript
  }: Partial<Record<"vue" | "prettier" | "markdown" | "unocss" | "sortKeys" | "typescript", boolean>> = {}
): FlatESLintConfigItem[] {
  const configs = [...presetJavaScript, ...yml, ...presetJsonc]
  if (enableSortKeys) {
    configs.push(...sortKeys)
  }
  if (enableVue) {
    configs.push(...vue)
  }
  if (enableMarkdown) {
    configs.push(...markdown)
  }
  if (enablePrettier) {
    configs.push(...prettier)
  }
  if (enableTypescript) {
    configs.push(...typescript)
  }
  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]))
  }
  return configs
}
