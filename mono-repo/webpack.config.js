const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const TerserPlugin = require('terser-webpack-plugin')
const fs = require('fs')
const glob = require('glob')

const getPlugins = (mode) => {
  const plugins =
    mode === 'production'
      ? []
      : [
          new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map',
          }),
        ]

  return plugins
}

module.exports = (_env, { mode }) => ({
  target: 'node',
  mode,
  name: 'index',
  entry: glob.sync('{,!(node_modules)/**/}*index.js').reduce((acc, item) => {
    const path = item.split('/')
    path.pop()
    const name = path.join('/')
    acc[name] = `/${item}`
    return acc
  }, {}),
  plugins: getPlugins(mode),
  externals: [
    nodeExternals({
      allowlist: [/^@boots/],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!@boots).*/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(process.cwd(), 'babel.config.js'),
          },
        },
      },
      {
        test: /\.ya?ml$/,
        type: 'json', // Required by Webpack v4
        use: 'yaml-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  
  node: {
    __dirname: true,
  },
  output: {
    path: path.resolve(process.cwd(), 'build'),
    libraryTarget: 'commonjs2',
    filename: '[name]/bundle.js',
  },
})
