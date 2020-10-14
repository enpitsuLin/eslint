## eslint-config-consenlabs

This is the eslint configuration used by Organization Consenlabs.

You can extend and inherit from it, please initiate an issue for any detailed changes.

## Guide
### JavaScript

Please make sure you have installed `eslint` and version 5 or higher.

1. Install package: `yarn add @consenlabs/eslint -D`
2. Add the following code to the in-configuration file (`.eslintrc`):

    ```
    { "extends": "@consenlabs/eslint" }
    ```

    **OR**, if you are using the `.yml`:
    ```yml
    extends:
      - '@consenlabs/eslint'
    ```

3. If you are using `xo`, please refer to the following configuration:

    ```
    "xo": {
      "extends": [
        "@consenlabs/eslint"
      ]
    },
    ```

### TypeScript & React

We always recommend that you use `@typescript-eslint/parser` instead of `tslint`, as `tslint` is now out of maintenance,
please at least make sure that you have the following dependencies installed:

  - `@typescript-eslint/eslint-plugin > 1.6.0`
  - `@typescript-eslint/parser > 1.6.0`
  - `eslint > 5.0`

For more information on this please read the following links:

  - [Roadmap: TSLint -> ESLint](https://github.com/palantir/tslint/issues/4534) (TSLint: Stop accepting any PRs at December 1st, 2020)
  - [TSLint in 2019](https://medium.com/palantir/tslint-in-2019-1a144c2317a9)
  - [Getting Started - Linting your TypeScript Codebase](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md)
  - [typescript-eslint repo](https://github.com/typescript-eslint/typescript-eslint)

So naturally, we need to install dependencies before we begin:

1. Install deps: `yarn add eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser -D`
2. Install package: `yarn add @consenlabs/eslint-ts -D`
3. Adding configuration to the `.eslintrc` file:

    ```json
    "extends": ["@consenlabs/eslint-ts"],
    "parserOptions": {
      "project": "./tsconfig.json"
    }
    ```

**For React:**
```json
{
  "extends": [
    "@consenlabs/eslint-ts",
    "@consenlabs/eslint-ts/react"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

<br/>

## LICENSE
[MIT](https://github.com/@consenlabs/eslint/blob/master/LICENSE)
