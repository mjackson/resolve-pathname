var webpack = require('webpack')

module.exports = {

  output: {
    library: 'resolvePathname',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }

}
