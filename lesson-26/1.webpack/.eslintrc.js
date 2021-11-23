module.exports = {
  "extends": [
    "airbnb",
    "airbnb-typescript"
  ],
  "plugins": [
    "@typescript-eslint/eslint-plugin"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "jsx-a11y/mouse-events-have-key-events": "off",
    "react/prefer-stateless-function": "off",
    "react/no-array-index-key": "off",
    "react/destructuring-assignment": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-useless-constructor": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/no-access-state-in-setstate": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-param-reassign": "off",
    "react/jsx-one-expression-per-line": "off",
    "max-len": [
      1,
      120
    ]
  }
}
