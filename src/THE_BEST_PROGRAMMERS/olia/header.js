import api from './apiService.js'
import { render } from '../illia/index.js'
const headerClose = document.querySelector('.header-close')
const headerSlide = document.querySelector('.header-slide')
const inputHeader = document.querySelector('.header-input')
const cityList = document.querySelector('.header-list')
const headerform = document.querySelector('.header-form')
formSubmit()
headerform.addEventListener('submit', e => {
    e.preventDefault();
    formSubmit()
})
cityList.addEventListener('click', checkClick)
const icons = {
    '01d': 'icon-sun',
    '01n': 'icon-sun',
    '02d': 'icon-clouds-and-sun',
    '02n': 'icon-clouds-and-sun',
    '03d': 'icon-cloudy',
    '03n': 'icon-cloudy',
    '04d': 'icon-cloudy',
    '04n': 'icon-cloudy',
    '09d': 'rain',
    '09n': 'rain',
    '10d': 'rain',
    '10n': 'rain',
    '11d': 'icon-cloudy',
    '11n': 'icon-cloudy',
    '13d': 'icon-snow',
    '13n': 'icon-snow',
    '50d': 'icon-cloudy',
    '50n': 'icon-cloudy',
}

//Поиск города по сабмиту
function formSubmit() {
    let targetCity = inputHeader.value
    if (targetCity === '') {
        targetCity = 'Kyiv'
    }
    api.fetchWeather(targetCity)
        .then(data => {
            if (data.cod !== '200') {
                inputHeader.value = ""
                return
            }
            const allData = { list: data.list, city: data.city }
            allData.list.forEach(el => {
                el.weather[0].icon = icons[el.weather[0].icon]
                el.dt = (new Date((+el.dt) * 1000)).toString()
            })
            console.log(allData);
            render(allData)
        });

}

//Клик на звездочку сохраняет значение в локал сторытдж и рендерит список
// При перезагрузке сохраняются кнопки
//Сделать проверку чтобы не возможно было добавить повторно город и написать что-либо

const starIcon = document.querySelector('.header-icon-star')
starIcon.addEventListener('click', saveCity)


function saveCity() {
    let newCity = inputHeader.value
    api.fetchWeather(newCity)
        .then(data => {
            if (data.cod === '404') {
                inputHeader.value = ""
                return
            }
            if (localStorage.getItem('city') === null) {
                localStorage.setItem('city', '[]');
            }
            if (localStorage.getItem('city').includes(newCity)) {
                return
            }
            let allCity = JSON.parse(localStorage.getItem('city'))
            allCity.push(newCity);
            localStorage.setItem('city', JSON.stringify(allCity))
            createFavoritCity(newCity)
        })
}

function createFavoritCity(newCity) {
    let liEl = `<li class="header-item">
<button class="header-btn"><span class="header-text">${newCity}</span>
<svg class="header-close">
<use href="sprite.svg#icon-cross"></use>
</svg>
</button>
</li>`
    cityList.insertAdjacentHTML('beforeend', liEl)
}

if (localStorage.getItem('city') !== null) {
    JSON.parse(localStorage.getItem('city')).forEach(el => {
        createFavoritCity(el)
    })
}


//________________________________________________________________

function checkClick(e) {
    console.dir(e)
    if (e.target.nodeName === 'svg') {
        e.path[2].remove()
        localStorage.removeItem('city')
    }
    renderCityWeather(e)
}

function renderCityWeather(e) {
    if (e.target.nodeName === 'BUTTON' || e.target.nodeName === 'SPAN') {
        inputHeader.value = e.target.innerText
        formSubmit()
    }
}

//_______________________________________________
// слайдер для лист
headerSlide.addEventListener('click', activeSlider)
function activeSlider(){
console.log('helo');
cityList.style.height = 'unset'
}
