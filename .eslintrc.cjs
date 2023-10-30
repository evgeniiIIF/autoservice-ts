module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@vue/eslint-config-airbnb', '@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended', 'prettier'],
  plugins: [],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'vue/require-default-prop': 'off',
    'vue/no-setup-props-destructure': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    camelcase: 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error', 'unix'],
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'import/no-cycle': 'off',
    'no-prototype-builtins': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'vuejs-accessibility/anchor-has-content': 'off',
    'vue/no-v-html': 'off'
  },
};
