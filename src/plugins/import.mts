import type { ESLint, Linter } from 'eslint';
import importPlugin from 'eslint-plugin-import';

import { extensions, patterns } from '../lib/constants.mjs';

export default [
	{
		plugins: {
			'import': importPlugin as ESLint.Plugin,
		},

		files: patterns.base,

		rules: {
			...importPlugin.flatConfigs.recommended.rules as Linter.Config['rules'],
			...importPlugin.flatConfigs.typescript.rules as Linter.Config['rules'],

			'import/consistent-type-specifier-style': [ 'error', 'prefer-top-level' ],
			'import/extensions'                     : [ 'error', 'ignorePackages', {
				'js' : 'never',
				'jsx': 'never',
				'ts' : 'never',
				'tsx': 'never',
			} ],
			'import/first'               : [ 'error' ],
			'import/newline-after-import': [ 'error', {
				count           : 1,
				considerComments: false,
			} ],
			'import/no-absolute-path'          : [ 'error' ],
			'import/no-cycle'                  : [ 'error' ],
			'import/no-deprecated'             : [ 'error' ],
			'import/no-mutable-exports'        : [ 'error' ],
			'import/no-named-as-default-member': [ 'off' ],
			'import/no-useless-path-segments'  : [ 'error' ],
			'import/order'                     : [ 'error', {
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'object',
					'unknown',
				],
				named      : true,
				alphabetize: {
					order          : 'asc',
					caseInsensitive: true,
				},
				'newlines-between': 'always',
			} ],
		},

		settings: {
			'import/extensions': extensions.base,
			'import/parsers'   : {
				'@typescript-eslint/parser': extensions.ts,
			},
			'import/resolver': {
				node: {
					extensions: extensions.base,
				},
				typescript: true,
			},
		},
	},
] satisfies Linter.Config[];
