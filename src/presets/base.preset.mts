import type { Linter } from 'eslint';
import globals from 'globals';

import { patterns } from '../lib/constants.mjs';
import stylisticJsPlugin from '../plugins/@stylistic.js.mjs';
import alignAssignmentsPlugin from '../plugins/align-assignments.mjs';
import basePlugin from '../plugins/base.mjs';
import importPlugin from '../plugins/import.mjs';
import jsonPlugin from '../plugins/json.mjs';
import markdownPlugin from '../plugins/markdown.mjs';
import nPlugin from '../plugins/n.mjs';
import promisePlugin from '../plugins/promise.mjs';

export default [
	...basePlugin,
	...stylisticJsPlugin,
	...alignAssignmentsPlugin,
	...importPlugin,
	...markdownPlugin,
	...nPlugin,
	...promisePlugin,
	...jsonPlugin,

	{
		files : patterns.js,

		languageOptions : {
			ecmaVersion : 2022,
			sourceType  : 'module',
			globals     : {
				...globals.es2021,
				...globals.node,
			},
		},

		linterOptions : {
			reportUnusedDisableDirectives : 'warn',
		},
	},
] satisfies Linter.Config[];
