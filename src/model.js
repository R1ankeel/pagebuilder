import image from './assets/img/conf.jpg'
import {TitleBlock, ImageBlock, TextBlock, ColBlock} from './classes/blocks'
import {css} from "./utils";

const title = 'Пагебуилдер'
const mainText = 'Это конструктор сайтов на чистом JavaScript'
const col1 = 'Я сделяль'
const col2 = 'но ето не точно'
const textStyle = 'background: darkblue; ' +
    'color: yellow; ' +
    'background: linear-gradient(to bottom, #9d9ec1, #5b44cd);' +
    'margin-top: 10px;' +
    'text-align: center;' +
    'padding-top: 5px;'

export const model = [
    new TitleBlock(title, {styles: 'background: linear-gradient(to right, #0319f1, #01eafc);' +
            'color: #fff;' +
            'text-align: center;' +
            'padding: 10px;',
        tag: 'h2',}),

    new ImageBlock(image, {imageStyles: 'max-width: 100%;',
        styles: css({
            'padding-top': '5px',
        })
        }),

    new TextBlock(mainText, {
        styles: textStyle
    }),

    new ColBlock([
        col1,
        col2],
        {
            styles: 'padding: 1rem;' +
                'text-align: center;' +
                'box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);' +
                'border: 1px solid gray;' +
                'margin-top: 5px;' +
                'color: magenta;'
        }),
]
