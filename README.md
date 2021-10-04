# Webpack assembly

Базовый сборщик `webpack 5` для верстки многостраничных или одностраничных сайтов Использует `webpack-merge`, что позволяте
создавать любые сборки через систему конфигов. Все `plugins` и `loaders` вынесены и описаны для переиспользования во
всех конфигах

## Поддерживает

* SCSS/SASS
* Handlebars templates
* Javascript
* Fonts loader
* Images loader

## Для старта

```shell
    cd ./prfoject-folder
    git clone https://github.com/smiledie-hub/webpack-assembly .
```

## Комманды

```shell
    yarn build
    yarn dev
```

## Проблемы
* Не работаю динамические испорты через `.hbs` файлы, но есть решение, указывать корневой путь. Так для картинки будет
`./public/images/image.jpg`, так же и для шрифтов и другиех статичных файлов подгружаемых через файлы `.hbs`, примеры есть в `src` папке