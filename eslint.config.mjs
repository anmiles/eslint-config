import stylisticEslintPlugin from '@stylistic/eslint-plugin';
import { basePreset, tsPreset } from './dist/index.mjs';

export default [
	...basePreset,
	...tsPreset,
	{
		plugins : {
			'@stylistic' : stylisticEslintPlugin,
		},
		rules : {
			// TODO:
			// '@stylistic/object-curly-newline'    : [ 'error', 'always' ],
			// '@stylistic/object-property-newline' : [ 'error', {
			// 	allowAllPropertiesOnSameLine : false,
			// } ],
			// array-element-newline minItems
		},
	},
	{
		ignores : [
			'dist/*',
		],
	},
];
