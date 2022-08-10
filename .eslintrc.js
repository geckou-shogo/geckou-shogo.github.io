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
    'key-spacing' : ['error', {
      align: 'colon',
    }],
    'comma-dangle'   : ['error', 'always-multiline'],
    'no-multi-spaces': ['error', {
      exceptions: { VariableDeclarator: true },
    }],
    'space-before-function-paren': ['error', 'never'],
    'vue/attribute-hyphenation'  : ['error', 'never', {
      ignore: [],
    }],
    'vue/multi-word-component-names': 'off',
  },
}
