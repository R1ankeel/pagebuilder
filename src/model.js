import image from './assets/img/conf.jpg'
import {Block} from './classes/blocks'

const title = 'Пагебуилдер'
const mainText = 'Это конструктор сайтов на чистом JavaScript'
const col1 = 'Я сделяль'
const col2 = 'но ето не точно'

export const model = [
    new Block('title', title, styles: 'background: linear-gradient(to right, #0319f1, #01eafc);' +
'color: #fff;' +
'text-align: center;' +
'padding: 10px;',
    tag: 'h2',)
    {type: 'title', value: title, options: {

        }},
    {type: 'image', value: image, options: {
            imageStyles: 'max-width: 100%;',
            styles: 'padding-top: 5px;',

        }},
    {type: 'text', value: mainText, options: {
            styles: 'background: darkblue; ' +
                'color: yellow; ' +
                'background: linear-gradient(to bottom, #9d9ec1, #5b44cd);' +
                'margin-top: 10px;' +
                'text-align: center;' +
                'padding-top: 5px;'
        }},
    {type: 'textColumn', value: [
            col1,
            col2],
    options: {
        styles: 'padding: 1rem;' +
            'text-align: center;' +
            'box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);' +
            'border: 1px solid gray;' +
            'margin-top: 5px;' +
            'color: magenta;'
    }}
]
