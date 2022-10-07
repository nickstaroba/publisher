module.exports = {
  extends: ["@eterna/eslint-config-typescript", "@eterna/eslint-config-react"],
  ignorePatterns: ["dist/**/*", "stories/**/*"],
  rules: {
    "import/no-relative-packages": "off",
  },
};
