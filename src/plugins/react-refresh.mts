import type { Linter } from 'eslint';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

import { patterns } from '../lib/constants.mjs';

export default [
	{
		plugins : {
			'react-refresh' : reactRefreshPlugin,
		},

		files : patterns.react,

		rules : {
			...reactRefreshPlugin.configs.recommended.rules,

			'react-refresh/only-export-components' : [ 'error', {
				allowConstantExport : true,
				customHOCs          : [ 'observer' ],
			} ],
		},
	},
] satisfies Linter.Config[];
