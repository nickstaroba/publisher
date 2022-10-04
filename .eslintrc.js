module.exports = {
  extends: [
    '@eterna/eslint-config-typescript',
    '@eterna/eslint-config-react',
    'eslint-config-airbnb-typescript',
  ],
  ignorePatterns: ['packages/**/*'],
  parserOptions: {
    project: './tsconfig.json',
  },
};
