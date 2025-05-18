import type { Linter } from 'eslint';

import { default as base } from './configs/base.config.mjs';
import { default as jest } from './configs/jest.config.mjs';
import { default as react } from './configs/react.config.mjs';
import { default as ts } from './configs/ts.config.mjs';
import type { configNames } from './lib/constants.mjs';

export { default as globals } from 'globals';
export { extensions, patterns } from './lib/constants.mjs';

export const configs: Record<typeof configNames[number], Linter.Config[]> = {
	base,
	jest,
	react,
	ts,
};
