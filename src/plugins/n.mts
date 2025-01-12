import type { Linter } from 'eslint';
import nodePlugin from 'eslint-plugin-n';

import { patterns } from '../lib/constants.mjs';

export default [
	{
		plugins : {
			'n' : nodePlugin,
		},

		files : patterns.js,

		rules : {
			...nodePlugin.configs['flat/recommended'].rules,

			'n/no-extraneous-import' : [ 'error', {
				allowModules : [ 'globals' ],
			} ],
			'n/no-path-concat'  : [ 'error' ],
			'n/no-process-exit' : [ 'off' ],
		},
	},
] satisfies Linter.Config[];
