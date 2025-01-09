import type { Linter, ESLint } from 'eslint';

// @ts-expect-error 7016 plugin is non-typed
import promisePlugin from 'eslint-plugin-promise';

export default [
	{
		plugins : {
			'promise' : promisePlugin as ESLint.Plugin,
		},

		files : [
			'**/*.js',
			'**/*.mjs',
			'**/*.cjs',
			'**/*.ts',
			'**/*.cts',
			'**/*.mts',
			'**/*.jsx',
			'**/*.tsx',
		],

		rules : {
			...promisePlugin.configs['flat/recommended'].rules as Linter.Config['rules'],

			'promise/always-return'             : [ 'error', { ignoreLastCallback : true } ],
			'promise/no-callback-in-promise'    : [ 'error' ],
			'promise/no-multiple-resolved'      : [ 'error' ],
			'promise/no-nesting'                : [ 'error' ],
			'promise/no-promise-in-callback'    : [ 'error' ],
			'promise/no-return-in-finally'      : [ 'error' ],
			'promise/prefer-await-to-callbacks' : [ 'error' ],
			'promise/prefer-await-to-then'      : [ 'error' ],
			'promise/valid-params'              : [ 'error' ],
		},
	},
] satisfies Linter.Config[];
