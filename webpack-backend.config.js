import webpack from 'webpack';
import LiveReloadPlugin from 'webpack-livereload-plugin'

export default  {
  entry: './react-backend/bin/www',
  output: {
    path: '/dist',
    filename: 'bundle-backend.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new LiveReloadPlugin()
  ]
};
