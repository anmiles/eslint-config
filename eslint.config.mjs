import { configs, patterns } from './dist/index.mjs';

export default [
	...configs.base,
	...configs.ts,

	{
		ignores: [
			'dist/*',
		],
	},

	{
		files: patterns.base,
		rules: {
			'@stylistic/max-len': [ 'error', {
				code          : 100,
				tabWidth      : 4,
				ignoreComments: true,
			} ],
			'@stylistic/object-property-newline': [ 'error', {
				allowAllPropertiesOnSameLine: true,
			} ],
			'import/extensions': [ 'error', 'ignorePackages', {
				'js' : 'always',
				'mjs': 'always',
				'ts' : 'never',
				'mts': 'never',
			} ],
		},
	},

	{
		files: patterns.ts,
		rules: {
			'@typescript-eslint/no-unsafe-type-assertion': [ 'off' ],
		},
	},
];
