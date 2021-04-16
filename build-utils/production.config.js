const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => ({
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, '../build'),
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: [
                MiniCssExtractPlugin.loader, // вытянет из js
                // Translates CSS into CommonJS
                "css-loader",
                "postcss-loader", // добавляет автопрефиксы
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }, ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./utill/index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
    ],
});