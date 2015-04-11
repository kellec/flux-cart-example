var webpack = require("webpack");

module.exports = {

  entry: __dirname + "/src/index.js",

  output: {
    path     : __dirname + "/static/",
    filename : "app.js"
  },

  module: {
    loaders: [
      { test : /\.js$/,  loaders : ["babel"] }
    ]
  }
}