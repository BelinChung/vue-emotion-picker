module.exports = {
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard', '@vue/prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'prettier/prettier': 'error',
    'no-new': 'off',
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    semi: [2, 'never'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-var': 'error',
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    'prefer-promise-reject-errors': 0,
    'no-prototype-builtins': 0,
    'no-case-declarations': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'vue/multi-word-component-names': 0,
    'vue/no-mutating-props': 0
  }
}
