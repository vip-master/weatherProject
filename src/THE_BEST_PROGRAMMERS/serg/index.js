// Изображения подключать так
// import imgSource from "./images/arms.jpg"
// в imgSource находится путь к вашему изображению
// А СПРАЙТ вот так
// import sprite from "../../utill/sprite.svg"
// document.body.insertAdjacentHTML("beforeend", `<svg>
//         <use href="${sprite}#icon-clouds-and-sun"></use>
//     </svg>`)

import { data } from 'autoprefixer';

import { rendMain } from '../_Mr_Paul/index.js'
import { rendFirst } from '../rlapsky/index.js'
import { rendChart } from '../vitalik/index.js'


const render = function(allData) {
    rendMain(allData.list)
    rendFirst(allData)
    rendChart(allData.list)
    console.log("render");
}
export { render }