import { fixupPluginRules } from '@eslint/compat';
import type { ESLint, Linter } from 'eslint';
// @ts-expect-error 7016 plugin is non-typed
import alignAssignmentsPlugin from 'eslint-plugin-align-assignments';

import { patterns } from '../lib/constants.mjs';

export default [
	{
		plugins : {
			'align-assignments' : fixupPluginRules(alignAssignmentsPlugin as ESLint.Plugin),
		},

		files : patterns.base,

		rules : {
			'align-assignments/align-assignments' : [ 'error' ],
		},
	},
] satisfies Linter.Config[];
