const BabelLoader = require("../Loaders/BabelLoader");
const {dirs} = require("../Settings/Constants");

module.exports = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [BabelLoader]
}