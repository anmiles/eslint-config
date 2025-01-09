import { basePreset, tsPreset } from './dist/index.mjs';

export default [
	...basePreset,
	...tsPreset,
	{
		ignores : [
			'dist/*',
		],
	},
];
