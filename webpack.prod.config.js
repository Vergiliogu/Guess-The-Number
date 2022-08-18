const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const Dotenv = require('dotenv-webpack')

const distPath = path.resolve(__dirname, "dist")

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: distPath,
    filename: "bundle.[contenthash].js",
    clean: true
  },
  mode: "production",
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.svg$/,
        include: [
          path.resolve(__dirname, "src/assets/images")
        ],
        use: {
          loader: "svg-url-loader",
          options: {
            limit: 512
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.tff$/,
        use: {
          loader: 'url-loader',
        },
        include: [
          path.resolve(__dirname, "src/assets/fonts")
        ]
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "Game"
    }),
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css"
    })
  ]
}
