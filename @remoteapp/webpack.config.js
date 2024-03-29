const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  target: "web",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.[name].[chunkhash].js",
    clean: true,
  },
  resolve: {
    alias: {
      "@components": path.join(__dirname, "src/components"),
      "@constants": path.join(__dirname, "src/constants"),
      "@hooks": path.join(__dirname, "src/hooks"),
      "@utils": path.join(__dirname, "src/utils"),
      "@assets": path.join(__dirname, "src/assets"),
    },
    modules: [path.join(__dirname, "src"), "node_modules"],
    extensions: [".js", ".ts", ".tsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /(\.scss$)/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
