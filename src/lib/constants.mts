const presetNames = [ 'base', 'ts', 'jest', 'react' ] as const;

const jsExtensions = [
	'.js',
	'.mjs',
	'.cjs',
	'.jsx',
];

const tsExtensions = [
	'.ts',
	'.cts',
	'.mts',
	'.tsx',
];

const jsPatterns = [
	'**/*.js',
	'**/*.mjs',
	'**/*.cjs',
	'**/*.jsx',
];

const tsPatterns = [
	'**/*.ts',
	'**/*.cts',
	'**/*.mts',
	'**/*.tsx',
];

const extensions = {
	base : [
		...jsExtensions,
		...tsExtensions,
	],
	ts : [
		...tsExtensions,
	],
	jest : [
		'.test.js',
		'.test.mjs',
		'.test.cjs',
		'.test.jsx',
		'.test.ts',
		'.test.cts',
		'.test.mts',
		'.test.tsx',
	],
	react : [
		...jsExtensions,
		...tsExtensions,
	],
} satisfies Record<typeof presetNames[number], string[]>;

const patterns = {
	base : [
		...jsPatterns,
		...tsPatterns,
	],
	ts : [
		...tsPatterns,
	],
	jest : [
		'**/*.test.js',
		'**/*.test.mjs',
		'**/*.test.cjs',
		'**/*.test.jsx',
		'**/*.test.ts',
		'**/*.test.cts',
		'**/*.test.mts',
		'**/*.test.tsx',
	],
	react : [
		...jsPatterns,
		...tsPatterns,
	],
} satisfies Record<typeof presetNames[number], string[]>;

export { extensions, patterns, presetNames };
