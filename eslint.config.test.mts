import json from "@eslint/json";
import { es2021, node } from "globals";
import type { Linter } from "eslint";

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
