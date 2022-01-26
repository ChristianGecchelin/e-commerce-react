const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module{
      rules: [
          {
              text: /\.(js|jsx)$/,
              exclude: /node_modules/
          }
      ]
  }
};
