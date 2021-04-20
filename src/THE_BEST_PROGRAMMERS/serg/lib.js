import galeru from './galery.hbs';
const rendMore = function(dayData) {
    const more = document.querySelector('.weather-moreInfo')
    const pepo = dayData.splice(7)
    const ret = dayData.map(e => {
        const rer = e.dt_txt.slice(11, 16);
        const wew = Math.round(e.main.pressure * 0.007500637554192211 * 100)
        const lolo = Math.round(e.main.temp)
        const icon = e.weather[0].icon
        e.dt_txt = rer
        e.main.pressure = wew
        e.main.temp = lolo
        e.icon = icon
        return e
        
    })
    more.innerHTML = galeru(ret)
    
}



export { rendMore }
const button = document.querySelector('.weather-moreInfo-slider')
button.innerHTML = `<button class="ewcw"><svg class="button_svg" width="17" height="18">
<use href = "./sprite.svg#icon-arrow_to_right" ></use></svg></button>`
