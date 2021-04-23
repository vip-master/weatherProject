import galeru from './galery.hbs';
import { initSlider, init } from '../illia/slider.js';

const button = document.querySelector('.weather-moreInfo-slider')

button.innerHTML = `<button class="ewcw_left"><svg class="button_svg" width="10" ">
    <use href = "./sprite.svg#icon-arrow_to_left" ></use></svg></button>
    <button class="ewcw_right "><svg class="button_svg " width="10" ">
    <use href = "./sprite.svg#icon-arrow_to_right" ></use></svg></button>`;
const itit = {
    container: document.querySelector('.weather-moreInfo-container'),
    list: document.querySelector('.weather-moreInfo'),
    prevButton:document.querySelector('.ewcw_left'),
    nextButton:document.querySelector('.ewcw_right'),
    step: 320,
    isHide: true,
}
const hf = initSlider(itit)
const rendMore = function (dayData) {
    init(hf,100)

    const more = document.querySelector('.weather-moreInfo')
    if (dayData.length > 7) {
        const opop = dayData.splice(1, 1)
        more.classList.add('with-jc');
        more.classList.remove('without-jc');
    } else {
        const opop = dayData;
        more.classList.add('without-jc');
        more.classList.remove('with-jc');
    }

   
    const pepo = dayData.splice(7)

    const ret = dayData.map(e => {
        const rer = e.dt.slice(16, 21)
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


