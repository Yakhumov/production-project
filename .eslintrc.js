module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:storybook/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.js", ".eslintrc.cjs"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest", 
    sourceType: "module",
  },
  plugins: ["react", "i18next", "jahar-plugin"],
  rules: {
    "react/jsx-indent": [2, 4],
    "react/jsx-indent-props": [2, 4],
    indent: [2, 4],
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".tsx"],
      },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "i18next/no-literal-string": [
      "error",
      {
        markupOnly: true,
      },
    ],
    "max-len": [
      "error",
      {
        ignoreComments: true,
      },
    ],
    "jahar-plugin/path-cheker": ['error',{alias: '@' }], 
    "jahar-plugin/layer-imports": [
      'error',
      {
          alias: '@',
          ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      },
  ],

  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
