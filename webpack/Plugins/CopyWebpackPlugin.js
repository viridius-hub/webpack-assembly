const CopyWebpackPlugin = require("copy-webpack-plugin");

/**
 * Подробный JSdoc
 * @param {Object} options
 * @see ссылка на доки
 */
module.exports = function createPlugin(options) {
    return new CopyWebpackPlugin(options)
};