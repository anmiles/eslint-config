import baseConfig from './dist/base.preset.mjs';
import tsConfig from './dist/ts.preset.mjs';

export default [
	...baseConfig,
	...tsConfig,
	{
		ignores : [
			'dist/*',
		],
	},
];
