const path = require('path');
const { mainModule } = require('process');

module.exports = {
  mode: 'production',
  entry: 'src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
}