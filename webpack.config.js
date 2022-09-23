const path = require('path')
const webpack = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { NODE_ENV } = process.env

function resolve(dir) {
  return path.join(__dirname, dir)
}

let config = {
  entry: ['./src/index.js'],
  output: {
    path: resolve('./dist'),
    filename: 'vue-emotion-picker.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        include: [resolve('src')]
      },
      {
        test: /\.scss$/,
        use: [
          NODE_ENV === 'development' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      formatter: require('eslint-friendly-formatter')
    }),
    new VueLoaderPlugin()
  ]
}

// for production build
if (NODE_ENV === 'production') {
  config.externals = {
    vue: 'vue'
  }
  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'vue-emotion-picker.css'
    })
  ])
} else if (NODE_ENV === 'development') {
  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new HtmlWebpackPlugin({ template: './example/index.html' })
  ])

  config = Object.assign(config, {
    entry: './example/main.js',
    output: {
      path: path.resolve(__dirname, 'example'),
      filename: 'example.js'
    },
    devtool: 'source-map'
  })
}

module.exports = config
