const path = require("path");
const HtmlWebpackPlugin = require("../Plugins/HtmlWebpackPlugin");
const MiniCssExtractPlugin = require("../Plugins/MiniCssExtractPlugin");
const CleanWebpackPlugin = require("../Plugins/CleanWebpackPlugin");
const Pug = require("../Presets/Pug");
const Scripts = require("../Presets/Scripts");
const Style = require("../Presets/Style");
const Fonts = require("../Presets/Fonts");
const Images = require("../Presets/Images");
const {dirs} = require('../Settings/Constants')

module.exports = {
    context: dirs.src,
    target: "web",
    entry: {
        main: path.join(dirs.src, "index.js")
    },
    output: {
        path: dirs.dist,
        filename: 'assets/js/[name].bundle.js',
        publicPath: "/",
        assetModuleFilename: '[path][name][ext]'
    },
    resolve: {
        alias: {
            '@': dirs.src,
            '@public': path.join(dirs.src, "public"),
            '@assets': path.join(dirs.src, "assets"),
            '@js': path.join(dirs.src, "assets", "js"),
            '@scss': path.join(dirs.src, "assets", "scss"),
            '@images': path.join(dirs.src, "public", "images"),
            '@fonts': path.join(dirs.src, "public", "fonts"),
        },
    },
    plugins: [
        ...HtmlWebpackPlugin(),
        MiniCssExtractPlugin({
            filename: "assets/css/style.css",
        }),
        CleanWebpackPlugin({}),
    ],
    module: {
        rules: [
            Pug,
            Scripts,
            Style,
            Fonts,
            Images,
        ],
    }
}