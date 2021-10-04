/**
 * url-loader это надстройка над file-loader. Он позволяет учитывать ассеты во время бандлинга
 *
 * @example
 * Какой-то ресурс запросил some-image.png. Если для загрузки нужен url-loader, то url-loader проверит размер файла
 * 1. если он меньше лимита, то url-loader вернет ресурс как base64 строку
 * 2. иначе, url-loader сложит файл в outputPath + name и вернёт вместо ресурса ссылку, по которой его можно загрузить.
 * В случае с some-image.png, он может сохраниться в outputPath/images/some-image.12345678hash.png, а url-loader вернет
 * publicPath/images/some-image.12345678hash.png
 *
 * @param {string} prefix префикс имён файлов
 * @param {number} limit если ресурс меньше лимита, он будет заинлайнен
 * @return {Object} loader конфиг лоадера
 * @see https://www.npmjs.com/package/url-loader
 */
function loader(prefix = "assets", limit = 100) {
    return {
        loader: "url-loader",
        options: {
            limit,
            name: `${prefix}/[name].[hash].[ext]`
        }
    }
}

module.exports = loader