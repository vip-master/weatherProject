// Изображения подключать так
// import imgSource from "./images/arms.jpg"
// в imgSource находится путь к вашему изображению
// А СПРАЙТ вот так
// document.body.insertAdjacentHTML("beforeend", `<svg>
//         <use href="./sprite.svg#icon-clouds-and-sun"></use>
//     </svg>`)
import { rendMore } from '../serg/lib.js'

import daysCard from './daysCard.hbs';

let isMoreInfo = false;
const fivedaysClass = document.querySelector('.fivedays');
const weatherList = document.querySelector('.weather-list');
const weatherTitle = document.querySelector(".weather-title");
const weatherTitleMobile = document.querySelector(".weather-main .weather-title");
const weatherListSlider = document.querySelector(".weather-list-slider");
const hideMoreInfo = document.querySelector(".weather-moreInfo");
const hideMoreInfoSlider = document.querySelector(".weather-moreInfo-slider");
const weekDays = {
    'Sun': 'Sunday',
    'Mon': 'Monday',
    'Tue': 'Tuesday',
    'Wed': 'Wednesday',
    'Thu': 'Thursday',
    'Fri': 'Friday',
    'Sat': 'Saturday',
};

weatherListSlider.insertAdjacentHTML('beforeend', 
    `<button class="fiveDaysScrollLeft">
        <svg class="five-days-arrow">
            <use href="./sprite.svg#icon-arrow_to_left"></use>
        </svg>
    </button>
    <button class="fiveDaysScrollRight">
        <svg class="five-days-arrow">
            <use href="./sprite.svg#icon-arrow_to_right"></use>
        </svg>
    </button>`);

function rendMain(data) {
    isMoreInfo = false;
    hideMoreInfo.innerHTML = '';
    hideMoreInfoSlider.innerHTML = '';
    hideMoreInfo.classList.add('none');
    console.log('Mr_Paul');
    console.log(data);

    function showMoreInfo(e) {
        isMoreInfo = true;
        fivedaysClass.classList.remove('position');
        hideMoreInfo.classList.remove('none');
        if(e.target.textContent !== 'more info') {
            return
        }
        const dayData = data.list[e.target.dataset.id];
        
        rendMore(JSON.parse(JSON.stringify(dayData)));

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
   !isMoreInfo ? document.querySelector('.fivedays').classList.toggle('position') : console.log('ha-ha-ha');;
}

export { rendMain, switchPosition };

// import markup from './markup.hbs';

// const test = document.querySelector('.test')

//     const moreInfoArray = splitArrayIntoChunks (data.list, 8);
//     console.log(moreInfoArray);

//     const dayOnCards = [];
//     const dateOnCards = [];
//     const monthOnCards = [];
    
//     for(let i = 0; i < data.list.length; i +=8) {

//       const weekDayNumber = new Date(data.list[i].dt * 1000).getDay();
//       const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//       dayOnCards.push(weekDays[weekDayNumber]);        
          
//       const dateNumber = new Date(data.list[i].dt * 1000).getDate();
//       dateOnCards.push(dateNumber)
        
//       const monthNumber = new Date(data.list[i].dt * 1000).getMonth();
//       const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
//       monthOnCards.push(months[monthNumber])
        
//     };
    
//     class Card {
//       constructor(day, date, month) {
//         this.day = day;
//         this.date = date;
//         this.month = month;
//       };
//     }

//       const daysArray = [];
//       for(let i = 0; i < dayOnCards.length; i +=1) {
//         const oneDay = new Card(dayOnCards[i], dateOnCards[i], monthOnCards[i]);
//         daysArray.push(oneDay);
//       }
//       console.log(daysArray);

//     // const daysArray = numbers.reduce((acc, value) => acc + value, 0);


//     test.innerHTML = markup(daysArray);
    
    
//   });
// };
// rendMain();



// import api from './api.js';

// import daysCard from './daysCard.hbs';
// import api from './api.js';

// const test = document.querySelector('.weather-moreInfo');




// fetch(
//     `https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=939eab3895e9f452425ca7e40505d9c8`,
//   ).then(res => res.json())
//   .then(data => {
//     console.log(data);
//     test.innerHTML = daysCard(data);
//     const dayOnCards = [];
//     const dateOnCards = [];
//     const monthOnCards = [];

//     for(let i = 0; i < data.list.length; i +=8) {

//       const weekDayNumber = new Date(data.list[i].dt * 1000).getDay();
//       const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//       dayOnCards.push(weekDays[weekDayNumber]);        

//       const dateNumber = new Date(data.list[i].dt * 1000).getDate();
//       dateOnCards.push(dateNumber)


//       const monthNumber = new Date(data.list[i].dt * 1000).getMonth();
//       const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
//       monthOnCards.push(months[monthNumber])

//     };

//     console.log(dayOnCards);
//     console.log(dateOnCards);
//     console.log(monthOnCards);


//     const temeprature = [];
//     for(let i = 0; i < 8; i += 1) {
//       temeprature.push(Math.round(data.list[i].main.temp));
//     }

//     const min = Math.min( ...temeprature );
//     const max = Math.max( ...temeprature );
//     console.log(min);
//     console.log(max);

//   });