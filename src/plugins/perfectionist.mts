import type { Linter } from 'eslint';
import * as perfectionistPlugin from 'eslint-plugin-perfectionist';

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
					type      : 'natural',
					order     : 'asc',
					ignoreCase: true,

					groups: [
						'reserved',
						'callback',
						'shorthand',
						'multiline',
						'unknown',
					],
				},
			],
		},
	},
];

export default config;
