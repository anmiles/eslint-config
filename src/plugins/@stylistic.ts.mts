import type { Linter, ESLint } from 'eslint';
import stylisticEslintPlugin from '@stylistic/eslint-plugin';

export default [
	{
		plugins : {
			'@stylistic' : stylisticEslintPlugin as ESLint.Plugin,
		},

		files : [
			'**/*.ts',
			'**/*.cts',
			'**/*.mts',
			'**/*.tsx',
		],

		rules : {
			'@stylistic/member-delimiter-style' : [ 'error' ],
		},
	},
] satisfies Linter.Config[];
