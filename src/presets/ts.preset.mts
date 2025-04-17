import typescriptEslintParser from '@typescript-eslint/parser';
import type { Linter } from 'eslint';
import globals from 'globals';

import { patterns } from '../lib/constants.mjs';
import stylisticTsPlugin from '../plugins/@stylistic.ts.mjs';
import typescriptEslintPlugin from '../plugins/@typescript-eslint.mjs';

export default [
	...stylisticTsPlugin,
	...typescriptEslintPlugin,

	{
		files : patterns.ts,

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

	{
		files : [
			'**/eslint.config.*ts',
		],

		languageOptions : {
			parserOptions : {
				project : false,
			},
		},

		rules : {
			// ignore rules that require type information and therefore adding eslint configuration file into tsconfig
			'@typescript-eslint/consistent-type-exports'        : [ 'off' ],
			'@typescript-eslint/dot-notation'                   : [ 'off' ],
			'@typescript-eslint/no-array-delete'                : [ 'off' ],
			'@typescript-eslint/no-confusing-void-expression'   : [ 'off' ],
			'@typescript-eslint/no-floating-promises'           : [ 'off' ],
			'@typescript-eslint/no-misused-promises'            : [ 'off' ],
			'@typescript-eslint/no-unsafe-type-assertion'       : [ 'off' ],
			'@typescript-eslint/prefer-find'                    : [ 'off' ],
			'@typescript-eslint/prefer-readonly'                : [ 'off' ],
			'@typescript-eslint/prefer-reduce-type-parameter'   : [ 'off' ],
			'@typescript-eslint/prefer-return-this-type'        : [ 'off' ],
			'@typescript-eslint/prefer-string-starts-ends-with' : [ 'off' ],
			'@typescript-eslint/promise-function-async'         : [ 'off' ],
			'@typescript-eslint/require-await'                  : [ 'off' ],
			'@typescript-eslint/restrict-plus-operands'         : [ 'off' ],
			'@typescript-eslint/restrict-template-expressions'  : [ 'off' ],
			'@typescript-eslint/switch-exhaustiveness-check'    : [ 'off' ],
			'@typescript-eslint/unbound-method'                 : [ 'off' ],

			'n/no-unpublished-import' : [ 'off' ],
		},
	},
] as Linter.Config[];
