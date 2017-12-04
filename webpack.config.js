var path = require('path');

  module.exports = {
    context: process.cwd(),
    entry: {
      script: './src/App.jsx'
  },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: "[name].js",
      chunkFilename: "[id].js"
    },

    // devtools: 'eval-source-map',
    devServer: { inline: true },

    module: {
      loaders: [
        { test: /\.css$/,
          loader: 'style-loader!css-loader' },
        { test: /\.jsx$/, exclude: (/node_modules/), loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        },
        {
          test: /\.(jpe?g|png)$/i,
          loader: 'responsive-loader',
          options: {
            // If you want to enable sharp support:
            // adapter: require('responsive-loader/sharp')
          }
        },
	{ test: /\.yaml/, loader: 'json-loader!yaml-loader' }
      ]
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx', '.png', '.jpg', '.ttf', '.yaml']
    }
  };
