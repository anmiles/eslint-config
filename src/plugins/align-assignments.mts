import { fixupPluginRules } from '@eslint/compat';
import type { ESLint, Linter } from 'eslint';
// @ts-expect-error 7016 plugin is non-typed
import alignAssignmentsPlugin from 'eslint-plugin-align-assignments';

export default [
	{
		plugins : {
			'align-assignments' : fixupPluginRules(alignAssignmentsPlugin as ESLint.Plugin),
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
			'align-assignments/align-assignments' : [ 'error' ],
		},
	},
] satisfies Linter.Config[];
