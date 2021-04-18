// Изображения подключать так
// import imgSource from "./images/arms.jpg"
// в imgSource находится путь к вашему изображению
// А СПРАЙТ вот так
// document.body.insertAdjacentHTML("beforeend", `<svg>
//         <use href="./sprite.svg#icon-clouds-and-sun"></use>
//     </svg>`)
import { rendMore } from '../serg/lib.js'

function rendMain(data) {
    rendMore(data)
    console.log("wellcome from Ternopil");
};
export { rendMain };
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