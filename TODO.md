https://eslint.org/docs/latest/use/configure/migration-guide

BEFORE: `eslintrc`
AFTER: `eslint.config.mjs`

BEFORE: `module.exports {}`
AFTER: `export default [{}]`

BEFORE: `plugins: ["jsdoc"]`
AFTER: `plugins: { jsdoc }` with `import jsdoc from "eslint-plugin-jsdoc";`

BEFORE: `parser: "@babel/eslint-parser"`
AFTER: `languageOptions: { parser: babelParser }` with `import babelParser from "@babel/eslint-parser";`

BEFORE: `root: true`
AFTER: nothing, always treated as true

BEFORE: `env: { browser: true }`
AFTER: `languageOptions: { globals: { ...globals.browser }}` with `import globals from "globals";`

BEFORE: `globals: { custom: 'value' }`
AFTER: `languageOptions: { globals: { custom: 'value' }}`

BEFORE: `parserOptions: { ecmaVersion: 2022, sourceType: "module" }`
AFTER: `languageOptions: { ecmaVersion: 2022, sourceType: "module" }`

BEFORE: `module.exports = { overrides: [...] }`
AFTER: `export default [...]`

BEFORE: `/* eslint-env mocha */`
AFTER: `/* global describe, it -- Globals defined by Mocha */` or `languageOptions: { globals: { ...globals.mocha }}`

BEFORE: `extends: ["eslint:recommended", "custom-config"]`
AFTER: `export default [ js.configs.recommended, customConfig, ... ]` with `import js from "@eslint/js"; import customConfig from "custom-config"; `

BEFORE: `ignorePatterns: ["temp.js", "config/*"]`
AFTER: `ignores: ["**/temp.js", "config/*"]`

BEFORE: `.eslintignore` = `temp.js \n config/*`
AFTER: `ignores: ["**/temp.js", "config/*"]`

BEFORE: `reportUnusedDisableDirectives`
AFTER: `linterOptions: { noInlineConfig: true, reportUnusedDisableDirectives: "warn" }`

BEFORE: `--ext .ts,.tsx`
AFTER: `files: ["**/*.ts", "**/*.tsx"]`

BEFORE: `--no-eslintrc`
AFTER: `--no-config-lookup`

BEFORE: `eslint .`
AFTER: `eslint`

BEFORE: `eslintConfig` in package.json
AFTER: move to flat config

RULES:

Four new rules have been enabled in eslint:recommended:
no-constant-binary-expression
no-empty-static-block
no-new-native-nonconstructor
no-unused-private-class-members

Additionally, the following rules have been removed from eslint:recommended:
no-extra-semi
no-inner-declarations
no-mixed-spaces-and-tabs
no-new-symbol
