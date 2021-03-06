// const path = require('path');
// const webpack = require('webpack');

// module.exports = {
//   entry: './src/index.jsx',
//   mode: 'development',
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel-loader',
//         options: { presets: ['@babel/env'] }
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: ['eslint-loader', 'babel-loader']
//       },
//       {
//         test: /\.(gif|png|jpe?g|svg)$/i,
//         use: [
//           'file-loader',
//           {
//             loader: 'image-webpack-loader',
//             options: {
//               bypassOnDebug: true, // webpack@1.x
//               disable: true // webpack@2.x and newer
//             }
//           }
//         ]
//       }
//     ]
//   },
//   resolve: { extensions: ['*', '.js', '.jsx'] },
//   output: {
//     path: path.resolve(__dirname, 'dist/'),
//     publicPath: '/dist/',
//     filename: 'bundle.js'
//   },
//   devServer: {
//     contentBase: path.join(__dirname, 'public/'),
//     port: 3000,
//     publicPath: 'http://localhost:3000/dist/',
//     hotOnly: true,
//     historyApiFallback: true
//   },
//   plugins: [new webpack.HotModuleReplacementPlugin()],
//   node: {
//     fs: 'empty'
//   }
// };
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader', 'babel-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg|eot|woff|woff2|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
    contentBase: './dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: './index.html'
    })
  ],
  node: {
    fs: 'empty'
  }
};
