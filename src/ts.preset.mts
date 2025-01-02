import type { Linter } from 'eslint';
import globals from 'globals';
import typescriptEslintParser from '@typescript-eslint/parser';
import stylisticTsPlugin from './plugins/@stylistic.ts.mjs';
import typescriptEslintPlugin from './plugins/@typescript-eslint.mjs';

export default [
	...stylisticTsPlugin,
	...typescriptEslintPlugin,

	{
		files : [
			'**/*.ts',
			'**/*.cts',
			'**/*.mts',
			'**/*.tsx',
		],

		languageOptions : {
			ecmaVersion : 2022,
			sourceType  : 'module',
			globals     : {
				...globals.es2021,
				...globals.node,
			},
			parser        : typescriptEslintParser,
			parserOptions : {
				project : true,
			},
		},

		linterOptions : {
			reportUnusedDisableDirectives : 'warn',
		},
	},
] satisfies Linter.Config[];
