/**
 * Загрузчик веб-пакетов для создания SVG-спрайтов.
 *
 * @return {Object} Config
 * @see https://github.com/JetBrains/svg-sprite-loader
 */

module.exports = {
    loader: 'svg-sprite-loader',
    options: {
        plainSprite: true,
        extract: true,
        publicPath: 'public/',
        outputPath: 'public/'
    }
}