var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      { test: /\.less$/,
        loader: "style!css!less"
      },
      { test: /\.(woff|woff2)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        loader: "url-loader",
        options: {
          mimetype: 'application/font-woff',
        },
      },
      { test: /\.(ttf|otf)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        loader: "url-loader",
        options: {
          mimetype: 'application/font-sfnt',
        },
      },
      { test: /\.eot(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        loader: "url-loader",
        options: {
          mimetype: 'application/vnd.ms-fontobject',
        },
      },
      { test: /\.svg(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        loader: "url-loader",
        options: {
          mimetype: 'image/svg+xml',
        },
      },
      { test: /\.(jpe?g|png|gif|json)$/i,
        loader: "url-loader",
      },
    ]
  }
};
