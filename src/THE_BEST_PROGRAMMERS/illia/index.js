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

let showToday = true

const openToday = (data) => {

    rendFirst(JSON.parse(JSON.stringify(data)))
}
const closeToday = () => {}
const openFDays = (data) => {
    rendMain(JSON.parse(JSON.stringify(data)))
    rendChart(JSON.parse(JSON.stringify(data.list)))
}
const closeFDays = () => {}

const toggle = (data) => {

    openToday(data)
    openFDays(data)

}

const render = function(allData) {
    allData.list = magic(allData.list)
    console.log("render");

    toggle(allData)


}
export { render }