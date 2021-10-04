const path = require("path");
const HtmlLoader = require("../Loaders/HtmlLoader");
const HandlebarsLoader = require("../Loaders/HandlebarsLoader");

module.exports = {
    test: /\.hbs$/i,
    use: [
        HandlebarsLoader({
            rootDir: path.join(__dirname, "src", "assets", "templates"),
            partialDirs: path.join(__dirname, "src", "assets", "templates", "components"),
            helpersDirs: path.join(__dirname, "src", "assets", "templates", "helpers")
        }),
    ],
}