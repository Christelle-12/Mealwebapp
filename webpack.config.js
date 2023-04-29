const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
<<<<<<< HEAD

=======
>>>>>>> e8d8d8c7995670b1097012233071640eb51be0ec
module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        loader: 'file-loader',
        options: {
          name: 'resource/images/[name].[ext]',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
<<<<<<< HEAD
};
=======
};
>>>>>>> e8d8d8c7995670b1097012233071640eb51be0ec
