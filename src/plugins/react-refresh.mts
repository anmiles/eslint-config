import type { Linter } from 'eslint';

import reactRefreshPlugin from 'eslint-plugin-react-refresh';

export default [
	{
		plugins : {
			'react-refresh' : reactRefreshPlugin.default,
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
			'react-refresh/only-export-components' : [ 'error', { allowConstantExport : true } ],
		},
	},
] satisfies Linter.Config[];
