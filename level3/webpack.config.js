module.exports = {
  entry: {
    'app': './client/index.js',
  },
  output: {
    path: './public/',
    filename: '[name].js'
  },
  resolve: {
    fallback: process.cwd()
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
  devtool: 'inline-source-map',
};
