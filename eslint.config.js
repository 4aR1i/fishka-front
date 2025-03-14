import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    files: ['**/*.ts'],
    rules: {
      'no-console': 'warn',
    },
  },
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    }
  }
);
