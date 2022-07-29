const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    library: {
      type: 'umd',
    },
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
};
