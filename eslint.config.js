import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    files: ['**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'error',
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {},
    },
    rules: {
      'no-console': 'error',
    },
  },
);
