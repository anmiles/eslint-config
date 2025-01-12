import { basePreset, tsPreset } from './dist/index.mjs';
import { patterns } from './dist/lib/constants.mjs';

export default [
	...basePreset,
	...tsPreset,
	{
		// TODO: #docs mention that possible problems mostly likely caused with lack of "files" option in override section
		files : patterns.js,

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
