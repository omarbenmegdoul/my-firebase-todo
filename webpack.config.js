const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
    mode: "development", // don't minify, don't optimize for size etc. This isn't the final build
    entry: "./src/index.js", //main file of your program
    devtool: "eval-source-map", //helps ensure console warnings point to right line etc.
    output: {
        path: path.resolve(__dirname, "dist"), //more reliable url than ./
        filename: "index.bundle.js", //where the webpack bundle gets outpu
    },
    module: { // loaders go here: they plug our css and js in
        rules: [
            {
                test: /\.(css)$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            },
            { test: /\.(js)$/, exclude: /node_modules/, use: "babel-loader" },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            // favicon: path.resolve(__dirname, "public", "favicon-16x16.png"),
        }),
        new Dotenv(), //plug in environment variables
        // new BundleAnalyzerPlugin(),
    ],
};