const configEslint = require('@eterna/lint-staged-config-eslint');
const configPrettier = require('@eterna/lint-staged-config-prettier');
const configStylelint = require('@eterna/lint-staged-config-stylelint');

module.exports = {
  ...configEslint,
  ...configPrettier,
  ...configStylelint,
};
