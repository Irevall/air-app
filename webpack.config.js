require('dotenv').config()
const path = require('path')

const { DefinePlugin } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, './src'),
  entry: {
    main: './index.js'
  },
  output: {
    filename: 'scripts/[name].[hash:7].bundle.js',
    chunkFilename: 'scripts/[id].[chunkhash:7].chunk.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: { implementation: require('sass') }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [path.resolve(__dirname, './src/styles/resources/*.scss')]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf|png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'media/[name].[hash:7].[ext]'
          }
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new DefinePlugin({
      PRODUCTION: JSON.stringify(process.env.PRODUCTION === 'true'),
      GOOGLE_API_KEY: JSON.stringify(process.env.GOOGLE_API_KEY),
      OPWEATHER_API_KEY: JSON.stringify(process.env.OPWEATHER_API_KEY)
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src/'),
    }
  },
  devServer: {
    historyApiFallback: true,
  }
}
