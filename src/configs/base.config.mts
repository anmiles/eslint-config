import type { Linter } from 'eslint';
import globals from 'globals';

import { patterns } from '../lib/constants.mjs';
import stylisticJsPlugin from '../plugins/@stylistic.js.mjs';
import alignAssignmentsPlugin from '../plugins/align-assignments.mjs';
import basePlugin from '../plugins/base.mjs';
import cssPlugin from '../plugins/css.mjs';
import importPlugin from '../plugins/import.mjs';
import jsonPlugin from '../plugins/json.mjs';
import markdownPlugin from '../plugins/markdown.mjs';
import nPlugin from '../plugins/n.mjs';
import perfectionistPlugin from '../plugins/perfectionist.mjs';
import promisePlugin from '../plugins/promise.mjs';

export default [
	...basePlugin,
	...stylisticJsPlugin,
	...alignAssignmentsPlugin,
	...cssPlugin,
	...importPlugin,
	...markdownPlugin,
	...nPlugin,
	...perfectionistPlugin,
	...promisePlugin,
	...jsonPlugin,

	{
		files: patterns.base,

		languageOptions: {
			ecmaVersion: 2022,
			sourceType : 'module',
			globals    : {
				...globals.es2021,
				...globals.node,
			},
		},

		linterOptions: {
			reportUnusedDisableDirectives: 'warn',
		},
	},
] as Linter.Config[];
