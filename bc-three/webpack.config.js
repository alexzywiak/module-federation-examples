const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin, ProvidePlugin } = require("webpack");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;
module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3003,
    historyApiFallback: true,
  },
  output: {
    publicPath: "http://localhost:3003/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      process: JSON.stringify({ env: process.env }),
    }),
    new ModuleFederationPlugin({
      name: "bcThree",
      filename: "remoteEntry.js",
      exposes: {
        "./BCThree": "./src/BCThreeContent",
      },
      remotes: {
        monolith: "monolith@http://localhost:3000/remoteEntry.js",
        bcTwo: "bcTwo@http://localhost:3002/remoteEntry.js",
        bcThree: "bcThree@http://localhost:3003/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
        },
        "react-dom": { singleton: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
