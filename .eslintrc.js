module.exports = {
  root: true,
  env : {
    browser: true,
    node   : true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules  : {
    'arrow-parens': ['error', 'as-needed'],
    curly         : ['error', 'multi'],
    'comma-dangle': ['error', 'always-multiline'],
    'key-spacing' : ['error', {
      align: 'colon',
    }],
    'no-multi-spaces': ['error', {
      exceptions: { VariableDeclarator: true },
    }],
    'no-floating-decimal'           : 'off',
    'space-before-function-paren'   : ['error', 'never'],
    'vue/multi-word-component-names': 'off',
    'vue/attribute-hyphenation'     : ['error', 'never', {
      ignore: ['custom-prop'],
    }],
  },
}
