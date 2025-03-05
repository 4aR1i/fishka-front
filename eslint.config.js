import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    files: ['**/*.ts'],
    rules: {
      'no-console': 'warn',
    },
  },
);
