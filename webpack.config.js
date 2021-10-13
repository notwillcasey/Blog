const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'client/src/App.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client/public')
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css?/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}