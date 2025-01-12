import stylisticEslintPlugin from '@stylistic/eslint-plugin';
import type { ESLint, Linter } from 'eslint';

import { patterns } from '../lib/constants.mjs';

export default [
	{
		plugins : {
			'@stylistic' : stylisticEslintPlugin as ESLint.Plugin,
		},

		files : patterns.ts,

		rules : {
			'@stylistic/member-delimiter-style'  : [ 'error' ],
			'@stylistic/type-annotation-spacing' : [ 'error' ],
		},
	},
] satisfies Linter.Config[];
