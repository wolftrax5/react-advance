const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifestPlugin({
      filename: 'manifest.webmanifest',
      name: 'React Advance - App to Prove React Skils',
      short_name: 'React Advance 🐣',
      description: 'Puedes encontrar y subir fotos de animales domésticos.',
      background_color: '#ffffff',
      theme_color: '#a590ff',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
      ]
    })

  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    }
  }
}
