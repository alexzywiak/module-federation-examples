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
    port: 3004,
    historyApiFallback: true,
  },
  output: {
    publicPath: "http://localhost:3004/",
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
      name: "incrementContext",
      filename: "remoteEntry.js",
      exposes: {
        "./IncrementContext": "./src/IncrementContext",
        "./WithIncrementContext": "./src/WithIncrementContext",
      },
      remotes: {},
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
