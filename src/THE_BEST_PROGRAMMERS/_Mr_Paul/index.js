import { rendMore } from '../serg/lib.js'
import daysCard from './daysCard.hbs';
import { initSlider, init } from '../illia/slider';

let isMoreInfo = false;
const fivedaysClass = document.querySelector('.fivedays');
const weatherList = document.querySelector('.weather-list');
const weatherTitle = document.querySelector(".weather-title");
const weatherTitleMobile = document.querySelector(".weather-main .weather-title");
const weatherListSlider = document.querySelector(".weather-list-slider");
const hideMoreInfo = document.querySelector(".weather-moreInfo");
const hideMoreInfoSlider = document.querySelector(".weather-moreInfo-slider");
const moreInfoContainer = document.querySelector('.weather-moreInfo-container');
const weekDays = {
    'Sun': 'Sunday',
    'Mon': 'Monday',
    'Tue': 'Tuesday',
    'Wed': 'Wednesday',
    'Thu': 'Thursday',
    'Fri': 'Friday',
    'Sat': 'Saturday',
};

weatherListSlider.innerHTML =  
    `<button class="fiveDaysScrollLeft">
        <svg class="five-days-arrow">
            <use href="./sprite.svg#icon-arrow_to_left"></use>
        </svg>
    </button>
    <button class="fiveDaysScrollRight">
        <svg class="five-days-arrow">
            <use href="./sprite.svg#icon-arrow_to_right"></use>
        </svg>
    </button>`;

    const obj = {
        container: document.querySelector('.weather-list-container'),
        list: document.querySelector('.weather-list'),
        prevButton: document.querySelector('.fiveDaysScrollLeft'),
        nextButton: document.querySelector('.fiveDaysScrollRight'),
        step: 85,
    };

    function cleanCurrent() {
        document.querySelectorAll(".more_info_btn").forEach(element => {
            element.classList.remove('currentMoreInfoBtn');
        });
        
        document.querySelectorAll(".days_list_item_day").forEach(element => {
            element.classList.remove('currentCity');
        });
    }

    const sliderIndex = initSlider(obj);

function rendMain(data) {
    init(sliderIndex, getComputedStyle(weatherList).width); 

    isMoreInfo = false;
    fivedaysClass.classList.remove('hundred');
    hideMoreInfo.classList.add('none');
    moreInfoContainer.classList.add('none');
    hideMoreInfoSlider.classList.add('none');

    cleanCurrent()

    function showMoreInfo(e) {
        cleanCurrent();
        isMoreInfo = true;
        fivedaysClass.classList.remove('position');
        hideMoreInfo.classList.remove('none');
        moreInfoContainer.classList.remove('none');
        hideMoreInfoSlider.classList.remove('none');
        if(e.target.textContent !== 'more info') {
            return
        }
        const dayData = data.list[e.target.dataset.id];
        rendMore(JSON.parse(JSON.stringify(dayData)));
        e.target.classList.add('currentMoreInfoBtn');

        const someArray = document.querySelectorAll(".days_list_item_day");
        for (let i = 0; i < someArray.length; i++) {
            someArray[e.target.dataset.id].classList.add('currentCity')
            
        }
    }

    weatherList.addEventListener('click', showMoreInfo);

    const weatherTitleCity = data.city.name + ', ' + data.city.country;
    weatherTitle.innerHTML = weatherTitleCity;
    weatherTitleMobile.innerHTML = weatherTitleCity;

    const dayOnCards = [];
    const dateOnCards = [];
    const monthOnCards = [];
    const iconOnCard = [];
    const minTempOnCards = [];
    const maxTempOnCards = [];

    data.list.forEach(el => {
        const justArr = el[0].dt.split(' ');
        dayOnCards.push(justArr[0]);
        dateOnCards.push(justArr[2]);
        monthOnCards.push(justArr[1])
        iconOnCard.push(el[0].weather[0].icon)

        const oneDayTempMin = [];
        const oneDayTempMax = [];
        for (let i = 0; i < el.length; i++) {
            oneDayTempMin.push(el[i].main.temp_min)
            oneDayTempMax.push(el[i].main.temp_max)  
        }
        minTempOnCards.push(Math.round(Math.min( ...oneDayTempMin)));
        maxTempOnCards.push(Math.round(Math.max( ...oneDayTempMax)));
    }); 

    class Card {
        constructor(day, date, month, icon, min, max, id) {
            this.day = day;
            this.date = date;
            this.month = month;
            this.icon = icon;
            this.min = min;
            this.max = max;
            this.id = id;
        };
    }
    let id = 0;
    const daysArray = [];
    for(let i = 0; i < dayOnCards.length; i +=1) {
        const oneDay = new Card(weekDays[dayOnCards[i]], dateOnCards[i], monthOnCards[i], iconOnCard[i], minTempOnCards[i], maxTempOnCards[i], id = i);
        daysArray.push(oneDay);
    }
    weatherList.innerHTML = daysCard(daysArray);
};

function switchPosition () {
    fivedaysClass.classList.add('hundred');
   !isMoreInfo ? document.querySelector('.fivedays').classList.toggle('position') : "";
}

export { rendMain, switchPosition };