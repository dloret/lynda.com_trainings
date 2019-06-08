const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist/index.html'),
    filename: 'bundle.js',
    publicPath: 'assets',
  },
  devServer: {
    inline: true,
    contentBase: 'dist/',
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: { presets: ['latest', 'stage-0'] },
          },
        ],
      },
    ],
  },
};
