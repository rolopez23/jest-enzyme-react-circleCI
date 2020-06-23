const path = require('path');
console.log('Why am I bundled?')

module.exports = {
  entry: `${__dirname}/client/src/Index.jsx`,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`
  }
};
