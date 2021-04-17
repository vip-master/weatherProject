const path = require("path");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const {
    merge
} = require("webpack-merge");

// console.log("DIRNAME", __dirname); // глобальная переменная, содержащая абсолютный путь к файлу
const loadModeConfig = (env) => require(`./build-utils/${env.mode}.config.js`)(env);
// экспорт объекта настроек
module.exports = (a, env) =>
    merge({
            mode: env.mode,
            context: path.resolve(__dirname, "src"),
            // 1. точка входа - откуда строить дерево зависимостей
            entry: "./utill/index.js",
            // 2. куда положить результирующий бандл
            output: {
                filename: "[name].bundle.js",
                assetModuleFilename: '[name][ext]',
            },
            // 3. загрузчики (loaders)
            module: {
                rules: [{
                        test: /\.m?js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: "babel-loader",
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        }
                    },
                    {
                        test: /\.html$/,
                        use: ["html-loader"],
                    },
                    {
                        test: /\.(gif|png|jpe?g|svg)$/,
                        type: 'asset',
                    },
                    {
                        test: /\.hbs$/,
                        use: ["handlebars-loader"],
                    },
                ],
                // плагины применяются к результирующему бандлу
            },
            plugins: [
                new CleanWebpackPlugin(),
            ],
        },
        loadModeConfig(env)
    );