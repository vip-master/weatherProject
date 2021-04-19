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

const magic = (arr) => {
    let current = arr[0].dt.split(" ")[2]
    let newArr = []
    return arr.reduce((p, c) => {
        if (current === c.dt.split(" ")[2]) {
            newArr.push(c)
            return p
        } else {
            current = c.dt.split(" ")[2]
            p.push(newArr)
            newArr = []
            newArr.push(c)
            return p
        }
    }, [])

}

const render = function(allData) {
    allData.list = magic(allData.list)
    console.log("render");


    rendMain(JSON.parse(JSON.stringify(allData)))
    rendFirst(JSON.parse(JSON.stringify(allData)))
    rendChart(JSON.parse(JSON.stringify(allData.list)))
}
export { render }