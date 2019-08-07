const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackBannerPlugin = require('html-webpack-banner-plugin');

const VENDOR_LIBS = ['react', 'react-dom', 'prop-types'];
const BANNER = `

Tic-Tac-Toe in React!
@license MIT.
Copyright (c) 2019 Adil Iqbal.

For uncompressed source code, please visit:
https://github.com/Adil-Iqbal/tic-tac-toe-react

`;

module.exports = {
  entry: {
    bundle: './src/scripts/index.jsx',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'scripts/[name].[chunkhash].bundle.js',
    chunkFilename: 'scripts/[name].[chunkhash].bundle.js',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.scss$/,
        loaders: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunksSortMode(chunk1, chunk2) {
        const order = ['vendor', 'runtime', 'bundle'];
        const order1 = order.indexOf(chunk1.names[0]);
        const order2 = order.indexOf(chunk2.names[0]);
        return order1 - order2;
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[name].css',
    }),
    new webpack.BannerPlugin({
      banner: BANNER,
    }),
    new CopyWebpackPlugin([{
      from: 'src/static',
      to: 'static',
    }]),
    new HtmlWebpackBannerPlugin({
      banner: BANNER,
    }),
  ],
};
