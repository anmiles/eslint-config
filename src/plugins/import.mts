import type { Linter, ESLint } from 'eslint';

// @ts-expect-error 7016 plugin is non-typed
import importPlugin from 'eslint-plugin-import';

export default [
	{
		plugins : {
			'import' : importPlugin as ESLint.Plugin,
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
			...importPlugin.flatConfigs.recommended.rules as Linter.Config['rules'],
			...importPlugin.flatConfigs.typescript.rules as Linter.Config['rules'],

			'import/consistent-type-specifier-style' : [ 'error', 'prefer-top-level' ],
			'import/exports-last'                    : [ 'error' ],
			'import/extensions'                      : [ 'error', { js : 'never', json : 'always', mjs : 'always' } ],
			'import/first'                           : [ 'error' ],
			'import/group-exports'                   : [ 'error' ],
			'import/newline-after-import'            : [ 'error', { count : 1, considerComments : false } ],
			'import/no-absolute-path'                : [ 'error' ],
			'import/no-cycle'                        : [ 'error' ],
			'import/no-deprecated'                   : [ 'error' ],
			'import/no-mutable-exports'              : [ 'error' ],
			'import/no-named-as-default-member'      : [ 'off' ],
			'import/no-useless-path-segments'        : [ 'error' ],
			'import/order'                           : [ 'error', { groups : [ 'builtin', 'external', 'unknown', 'internal', 'parent', 'sibling', 'index' ] } ],
		},
	},

	{
		files : [
			'**/*.ts',
			'**/*.cts',
			'**/*.mts',
			'**/*.tsx',
		],

		settings : {
			'import/parsers' : {
				'@typescript-eslint/parser' : [ '.ts', '.tsx' ],
			},
			'import/resolver' : {
				typescript : true,
				node       : true,
			},
		},
	},
] satisfies Linter.Config[];
