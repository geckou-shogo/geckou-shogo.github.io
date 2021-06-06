// build/index.js
const { resolve } = require('path')
const fs = require('fs-extra')

// Rename: _nuxt to static
fs.moveSync(
  resolve(__dirname, '../dist/_nuxt'),
  resolve(__dirname, '../dist/static')
)
