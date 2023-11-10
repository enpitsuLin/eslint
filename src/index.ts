import { hasVue } from './utils'
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

export const presetJsonc = [...jsonc, ...sortPackageJson, ...sortTsconfig]
export const presetLangsExtensions = [...markdown, ...yml, ...presetJsonc]

export const basic = [...presetJavaScript, ...typescript]
export { basic as presetBasic }

export const all = [
  ...basic,
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
  }: Partial<{
    vue: boolean
    prettier: boolean
    markdown: boolean
    unocss: boolean
    sortKeys: boolean
  }> = {}
): FlatESLintConfigItem[] {
  const configs = [...basic, ...yml, ...presetJsonc]
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
  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]))
  }
  return configs
}
