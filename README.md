## eslint-config-consenlabs

Flat ESLint configuration used by Organization Consenlabs.

## Features

 - Support JavaScript, TypeScript, Vue, Prettier out of box.
   - Support JSON(5),YAML,Markdown..
 - Built with [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new)
 - Format with prettier.


## Install

```sh
npm install -D @consenlabs-fe/eslint-config
```

Require Node.js >= 16.14

## Usage

For `"type": "module"`

```js
import { defineConfig } from '@consenlabs-fe/eslint-config'

export default defineConfig(/** options */)
```

for `"type": "commonjs"`

```js
const { defineConfig }  = require('@consenlabs-fe/eslint-config')
export default defineConfig(/** options */)
```

## VSCode

enable flatConfig support

```json
{
  "eslint.experimental.useFlatConfig": true
}
```

## LICENSE

[MIT](https://github.com/@consenlabs/eslint/blob/master/LICENSE)
