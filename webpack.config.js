const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appDirectory = path.resolve(__dirname, './');
const { presets } = require(`${appDirectory}/babel.config.js`);

// This is needed for webpack to compile JavaScript.
// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// `node_module`.
const babelLoaderConfiguration = {
  test: /\.js$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(appDirectory, 'index.js'),
    path.resolve(appDirectory, 'src'),
    path.resolve(appDirectory, 'node_modules/react-native-uncompiled'),
  ],
  exclude: /node_modules[/\\](?!react-native-vector-icons)/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // The 'metro-react-native-babel-preset' preset is recommended to match React Native's packager
      presets: [
        [
          'module:metro-react-native-babel-preset',
          { useTransformReactJSXExperimental: true },
        ],
        ['@babel/preset-env', { useBuiltIns: 'usage' }],
        '@babel/preset-react',
        '@babel/preset-flow',
        "@babel/preset-typescript"
      ],

      // Re-write paths to import only the modules needed by the app
      plugins: ['react-native-web', '@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread'],

      // Disable reading babel configuration
      babelrc: false,
      configFile: false,
    },
  },
};

// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
  test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
  type: 'asset/resource',
};

module.exports = {
  entry: [
    // load any web API polyfills
    path.resolve(appDirectory, 'index.js'),
  ],

  // configures where the build ends up
  output: {
    filename: 'bundle.web.js',
    path: path.resolve(appDirectory, 'dist'),
  },

  // ...the rest of your config

  module: {
    rules: [imageLoaderConfiguration, babelLoaderConfiguration,
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(react-native-elements|react-native-vector-icons)\/).*/,
        loader: 'babel-loader'
      },
      {
        test: /\.ttf$/,
        loader: 'url-loader',
        include: path.resolve(appDirectory, "node_modules/react-native-vector-icons")
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        type: 'asset/resource'
      }],
  },

  resolve: {
    // This will only alias the exact import "react-native"
    alias: {
      'react-native$': 'react-native-web',
    },
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: ['.web.js', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: appDirectory + '/public/index.html',
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      __DEV__: process.env.NODE_ENV !== 'production' || true,
    }),
  ],
};