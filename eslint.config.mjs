import { patterns, presets } from './dist/index.mjs';

export default [
	...presets.base,
	...presets.ts,
	{
		// TODO: #last mention that possible problems mostly likely caused with lack of "files" option in override section
		files : patterns.base,

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
				'js'  : 'always',
				'mjs' : 'always',
				'ts'  : 'never',
				'mts' : 'never',
			} ],
		},
	},
	// TODO: #last add this to an example of overriding rules
	{
		files : patterns.ts,

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
