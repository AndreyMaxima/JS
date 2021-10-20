module.exports = {
  env: { // Среды
    es6: true,
    browser: true,
    node: true
  },
  // ignorePatterns: ['**/src/noeslint/'], // Игнорируемые пути
  extends: [ // Правила
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    'prettier',
    '@typescript-eslint'
  ],
  rules: { // Пользовательские правила
    'no-shadow': "off",
    'max-classes-per-file': ["error", 10],
    'no-useless-constructor': 'off'
  }
};
