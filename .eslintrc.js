module.exports = {
  root: true,
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // add your custom rules here
  rules: {
    'no-new': 'off',
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    semi: [2, 'never'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-var': 'error',
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: false
    }],
    'prefer-promise-reject-errors': 0,
    'no-prototype-builtins': 0,
    'no-case-declarations': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
