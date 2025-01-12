const extensions = {
	js : [
		'.js',
		'.mjs',
		'.cjs',
		'.jsx',
		'.ts',
		'.cts',
		'.mts',
		'.tsx',
	],
	ts : [
		'.ts',
		'.cts',
		'.mts',
		'.tsx',
	],
};

const patterns = {
	js : [
		'**/*.js',
		'**/*.mjs',
		'**/*.cjs',
		'**/*.jsx',
		'**/*.ts',
		'**/*.cts',
		'**/*.mts',
		'**/*.tsx',
	],
	ts : [
		'**/*.ts',
		'**/*.cts',
		'**/*.mts',
		'**/*.tsx',
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
};

export { extensions, patterns };
