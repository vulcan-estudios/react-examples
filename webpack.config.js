const path = require('path');
const webpack = require('webpack');

const dev = process.env.NODE_ENV !== 'production';
const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(
      dev ? 'development' : 'production'
    )
  })
];

if (!dev) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  );
}

module.exports = {
  entry: {
    'core': [
      './client/core/index.js',
      './node_modules/foundation-sites/dist/js/foundation.min.js'
    ],
    'play': './client/play/index.js',
    'app': './client/app/index.js',
    'cms': './client/cms/index.js',
  },
  output: {
    path: './public/js/',
    filename: '[name].js'
  },
  resolve: {
    fallback: path.join(process.cwd(), '/')
  },
  module: {
    loaders: [{
      loader: 'babel',
      test: /\.js$/,
      exclude: /(node_modules)/,
      query: {
        presets: [
          'react',
          'es2015',
          'stage-1'
        ]
      }
    }]
  },
  devtool: dev ? 'inline-source-map' : undefined,
  plugins
};
