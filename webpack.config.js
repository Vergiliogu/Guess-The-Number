const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const distPath = path.resolve(__dirname, "dist")

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: distPath,
    filename: "bundle.js",
    clean: true
  },
  mode: "development",
  devServer: {
    static: {
      directory: distPath,
    },
    compress: true,
    port: 9000,
    devMiddleware: {
      writeToDisk: false
    }
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      JsxConverter: path.resolve(__dirname, "src/jsxConverter"),
      "@images": path.resolve(__dirname, "src/assets/images")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            "presets": ["@babel/preset-env"],
            "plugins": [
              ["@babel/plugin-transform-react-jsx", { "pragma": "createElement", "pragmaFrag": "createFragment" }]
            ]
          }
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
        use: ["style-loader", "css-loader"]
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
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "Counter"
    })
  ]
}