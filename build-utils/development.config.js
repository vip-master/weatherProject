const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => ({
    devtool: "eval-cheap-source-map",
    output: {
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                {
                    loader: "css-loader",
                    options: {
                        url: (url, resourcePath) => {
                            // resourcePath - path to css file

                            // Don't handle `img.png` urls
                            if (url.includes("svg")) {
                                return false;
                            }

                            return true;
                        },
                    }
                },
                // "postcss-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }, ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./utill/index.html"
    })],
    devServer: {
        compress: true,
        port: 4243,
        open: true,
    },
});