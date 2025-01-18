import type { Linter } from 'eslint';

import type { presetNames } from './lib/constants.mjs';
import { extensions, patterns } from './lib/constants.mjs';
import { default as base } from './presets/base.preset.mjs';
import { default as jest } from './presets/jest.preset.mjs';
import { default as react } from './presets/react.preset.mjs';
import { default as ts } from './presets/ts.preset.mjs';

const presets = { base, jest, react, ts } satisfies
    Record<typeof presetNames[number], Linter.Config[]>;

export { extensions, patterns, presets };
