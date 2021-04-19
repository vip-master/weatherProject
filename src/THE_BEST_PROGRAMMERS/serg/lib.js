import galeru from './galery.hbs';
const rendMore = function(dayData) {
    const more = document.querySelector('.weather-moreInfo')
    const pepo = dayData.splice(7)
    const ret = dayData.map(e => {
        const rer = e.dt_txt.slice(11, 16);
        const wew = Math.round(e.main.pressure * 0.007500637554192211 * 100)
        const lolo = Math.round(e.main.temp - 273)
        e.dt_txt = rer
        e.main.pressure = wew
        e.main.temp = lolo
        return e
    })
    more.innerHTML = galeru(ret)
}

// tet.then(function (data) {
//     rendMore(data.list)
// }) 
export { rendMore }