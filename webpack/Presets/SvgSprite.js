const SvgoLoader = require("../Loaders/SvgoLoader");
const SvgSpriteLoader = require("../Loaders/SvgSpriteLoader");
const path = require("path");
const {dirs} = require('../Settings/Constants');

module.exports = {
    test: /\.svg$/,
    include: path.join(dirs.src, "public", "icons"),
    use: [
        SvgSpriteLoader,
        SvgoLoader,
    ]
}
