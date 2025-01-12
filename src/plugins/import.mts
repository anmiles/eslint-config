import type { ESLint, Linter } from 'eslint';
// @ts-expect-error 7016 plugin is non-typed
import importPlugin from 'eslint-plugin-import';

import { extensions, patterns } from '../lib/constants.mjs';

export default [
	{
		plugins : {
			'import' : importPlugin as ESLint.Plugin,
		},

		files : patterns.js,

		rules : {
			...importPlugin.flatConfigs.recommended.rules as Linter.Config['rules'],
			...importPlugin.flatConfigs.typescript.rules as Linter.Config['rules'],

			'import/consistent-type-specifier-style' : [ 'error', 'prefer-top-level' ],
			'import/exports-last'                    : [ 'error' ],

			/*
			 * TODO: #docs
			 * 1. add examples of overriding this rule for ESM and CJS (check on end-projects)
			 * 2. update eslint.config.mjs
			 */
			'import/extensions'           : [ 'error', 'ignorePackages' ],
			'import/first'                : [ 'error' ],
			'import/group-exports'        : [ 'error' ],
			'import/newline-after-import' : [ 'error', {
				count            : 1,
				considerComments : false,
			} ],
			'import/no-absolute-path'           : [ 'error' ],
			'import/no-cycle'                   : [ 'error' ],
			'import/no-deprecated'              : [ 'error' ],
			'import/no-mutable-exports'         : [ 'error' ],
			'import/no-named-as-default-member' : [ 'off' ],
			'import/no-useless-path-segments'   : [ 'error' ],
			'import/order'                      : [ 'error', {
				groups : [
					'builtin',
					'external',
					'unknown',
					'internal',
					'parent',
					'sibling',
					'index',
					'object',
				],
				named       : true,
				alphabetize : {
					order           : 'asc',
					caseInsensitive : true,
				},
				'newlines-between'      : 'always',
				warnOnUnassignedImports : true,
			} ],
		},

		settings : {
			'import/extensions' : extensions.js,
			'import/parsers'    : {
				'@typescript-eslint/parser' : extensions.ts,
			},
			'import/resolver' : {
				node : {
					extensions : extensions.js,
				},
				typescript : true,
			},
		},
	},
] satisfies Linter.Config[];
