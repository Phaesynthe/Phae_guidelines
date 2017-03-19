
module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'globals': {
    'angular': true,
    'after': true,
    'before': true,
    'define': false,
    'describe': true,
    'it': true,
    'React': true,
    'ReactDOM': true
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  'rules': {
    'array-bracket-spacing': [ 'error', 'always' ],
    'complexity': [ 'error', 10 ],
    'eol-last': 'error',
    'indent': [ 'error', 2, { 'SwitchCase': 1 } ],
    'linebreak-style': [ 'error', 'unix' ],
    'max-depth': [ 'error', 6 ],
    'no-alert': 'error',
    // 'no-console': [ 'error', { allow: ['warn', 'error'] } ],
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-empty': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-multiple-empty-lines': [ 'error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 1 } ],
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-trailing-spaces': 'error',
    'no-unused-expressions': 'error',
    'no-useless-concat': 'error',
    'no-void': 'error',
    'radix': 'error',
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'always' ],
    'space-before-function-paren': 'error',
    'spaced-comment': [ 'error', 'always' ],
    'vars-on-top': 'error'
  }
};
