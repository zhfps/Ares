import * as tsEslint from 'typescript-eslint'
import Eslint from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'

export default tsEslint.config({
	ignores: [
		'dist',
		'public',
		'.vscode',
		'node_modules'
	]
},
	Eslint.configs.recommended,
	{
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
		plugins: {
			'@typescript-eslint': tsEslint.plugin,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			react
		},
		languageOptions: {
			globals: {
				...globals.es2015,
				...globals.browser,
				...globals.node
			},
			parser: tsEslint.parser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
					tsx: true
				}
			}
		},
		rules: {
			semi: ['error', 'never'],
			quotes: ['error', 'single'],
			'no-unused-vars': 'off'
		}
	}
)
