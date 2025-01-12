import { basePreset, tsPreset } from './dist/index.mjs';

export default [
	...basePreset,
	...tsPreset,
	{
		// TODO: #docs mention that possible problems mostly likely caused with lack of "files" option in override section
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
			'@stylistic/max-len' : [ 'error', {
				code           : 100,
				tabWidth       : 4,
				ignoreComments : true,
			} ],
			'@stylistic/object-property-newline' : [ 'error', {
				allowAllPropertiesOnSameLine : true,
			} ],
			'import/extensions' : [ 'error', 'ignorePackages', {
				mts : 'never',
				mjs : 'always',
			} ],
		},
	},
	// TODO: #docs add this to an example of overriding rules
	{
		files : [
			'**/*.ts',
			'**/*.cts',
			'**/*.mts',
			'**/*.tsx',
		],

		rules : {
			'@typescript-eslint/no-unsafe-type-assertion' : [ 'off' ],
		},
	},
	{
		ignores : [
			'dist/*',
		],
	},
];
