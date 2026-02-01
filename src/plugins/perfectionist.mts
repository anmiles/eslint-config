import type { Linter } from 'eslint';
import perfectionistPlugin from 'eslint-plugin-perfectionist';

import { patterns } from '../lib/constants.mjs';

const config: Linter.Config[] = [
	{
		plugins: {
			'perfectionist': perfectionistPlugin,
		},

		files: patterns.base,

		rules: {
			'perfectionist/sort-jsx-props': [
				'error',
				{
					type      : 'unsorted',
					order     : 'asc',
					ignoreCase: true,
					groups    : [
						'unknown',
						'shorthand-prop',
						'multiline-prop',
						'callback',
					],
					customGroups: [ {
						groupName         : 'callback',
						elementNamePattern: '^(on|handle)[A-Z]',
					} ],
				},
			],
		},
	},
];

export default config;
