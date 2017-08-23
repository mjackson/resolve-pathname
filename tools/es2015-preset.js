const plugins = []

if (process.env.BABEL_ENV === 'cjs') {
  plugins.push('add-module-exports')
}

module.exports = {
  presets: [
    [ 'es2015', {
      loose: true,
      modules: process.env.BABEL_ENV === 'es' ? false : 'commonjs'
    } ]
  ],
  plugins: plugins
}
