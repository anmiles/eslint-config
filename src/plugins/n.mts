import type { Linter } from 'eslint';
import nodePlugin from 'eslint-plugin-n';

export default [
	{
		plugins : {
			'n' : nodePlugin,
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
			...nodePlugin.configs['flat/recommended'].rules,

			'n/no-path-concat'  : [ 'error' ],
			'n/no-process-exit' : [ 'off' ],
		},
	},
] satisfies Linter.Config[];
