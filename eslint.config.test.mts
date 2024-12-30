import json from "@eslint/json";
import { es2021, node } from "globals";
import type { Linter } from "eslint";

// TODO: #next make all files .mts and add "build" command to compile in "dist". There will be different instruction for using js and ts versions of this shared config

const config: Linter.Config[] = [
	{
        plugins: {
            json,
        },
    },
	{
		files : [
			'*.js',
			'*.mjs',
			'*.cjs',
			'*.ts',
			'*.cts',
			'*.mts',
			'*.jsx',
			'*.tsx',
		],
		languageOptions: {
			globals: {
				...es2021,
				...node,
			}
		}
	},
	{
        files: ["**/*.json"],
        language: "json/json",
        rules: {
            "json/no-duplicate-keys": "error",
        },
    },
];

export default config;
