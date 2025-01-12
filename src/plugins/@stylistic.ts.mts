import stylisticEslintPlugin from '@stylistic/eslint-plugin';
import type { ESLint, Linter } from 'eslint';

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
			'@stylistic/member-delimiter-style'  : [ 'error' ],
			'@stylistic/type-annotation-spacing' : [ 'error' ],
		},
	},
] satisfies Linter.Config[];
