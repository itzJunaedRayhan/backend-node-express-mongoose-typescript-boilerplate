import pluginJs from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/no-unused-expressions': 'error',
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            'no-console': 'off',
            'no-undef': 'off',
            'no-unreachable': 'error',
        },
    },
];
