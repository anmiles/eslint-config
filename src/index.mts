import { default as base } from './presets/base.preset.mjs';
import { default as jest } from './presets/jest.preset.mjs';
import { default as react } from './presets/react.preset.mjs';
import { default as ts } from './presets/ts.preset.mjs';

export const presets = { base, jest, react, ts };
export { extensions, patterns } from './lib/constants.mjs';
