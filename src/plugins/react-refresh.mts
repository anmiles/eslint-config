import type { Linter } from 'eslint';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

export default [
	{
		plugins : {
			'react-refresh' : reactRefreshPlugin,
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
			...reactRefreshPlugin.configs.recommended.rules,

			'react-refresh/only-export-components' : [ 'error', {
				allowConstantExport : true,
				customHOCs          : [ 'observer' ],
			} ],
		},
	},
] satisfies Linter.Config[];
