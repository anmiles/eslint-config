import cssPlugin from '@eslint/css';
import type { Linter } from 'eslint';

export default [
	{
		plugins : {
			'import' : cssPlugin,
		},

		files : [
			'**/*.css',
		],

		language : 'css/css',

		rules : {
			...cssPlugin.configs.recommended.rules,
		},
	},
] satisfies Linter.Config[];
