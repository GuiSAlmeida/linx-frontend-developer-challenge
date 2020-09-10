const path = require('path');
const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : '',
  context: path.resolve(__dirname, 'src'),
  entry: './js/index.js',
  output: {
    path: path.join(__dirname, 'public/'),
    publicPath: '/',
    filename: 'index.js',
  },
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            reloadAll: true,
          },
        },
        'css-loader',
        'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new Webpack.HotModuleReplacementPlugin(),
  ],
};
