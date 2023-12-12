module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    // vue
    // 'plugin:vue/vue3-essential', // Lv1
    'plugin:vue/vue3-strongly-recommended', // Lv2
    // 'plugin:vue/vue3-recommended', // Lv3
    // js
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
     // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    "quotes": ['off', 'single'],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0
  }
}