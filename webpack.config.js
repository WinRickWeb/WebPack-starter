
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  // entry: './src/index.js',
  entry: {
    index: './src/index.js',
    main: './src/assets/js/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
    // assetModuleFilename: '[name][ext]',
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
    },
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      watch: true
    },
    host: '0.0.0.0',
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    liveReload: true,
    webSocketServer: 'ws',
    allowedHosts: "all",
    watchFiles: ['src/**/*'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project Demo',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './src/index.html',
      inject: true,
      base: true,
      showErrors: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  module: {
    rules: [
      // css
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      // scss
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      // font
      {
        test: /\.woff$|\.woff2?$|\.ttf$|\.eot$|\.otf$/,
        loader: 'file-loader',
        type: "asset/resource",
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/fonts/',
          publicPath: '../fonts',
          emit: false,
        },
        generator: {
          filename: "[name][ext][query]",
          outputPath: 'assets/fonts/',
          publicPath: './assets/fonts/',
          emit: false
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: false,
          // attrs: ['img:src', 'link:href']
        }
      },
      // image & icon
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images',
              publicPath: './assets/images/',
              emit: false
            }
          }
        ],
        generator: {
          filename: "[name][ext][query]",
          outputPath: 'assets/images/',
          publicPath: './assets/images/',
          emit: false
        },
      },
    ],
  },
};