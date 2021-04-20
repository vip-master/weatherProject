// Изображения подключать так
// import imgSource from "./images/arms.jpg"
// в imgSource находится путь к вашему изображению
// А СПРАЙТ вот так
// document.body.insertAdjacentHTML("beforeend", `<svg>
//         <use href="./sprite.svg#icon-clouds-and-sun"></use>
//     </svg>`)
import tempFirst from './templates/firstpage-up.hbs'
import tempBox from './templates/firstpage-box.hbs'

const months = {
    'Jun': 'January',
    'Feb': 'February',
    'Mar': 'March',
    'Apr': 'April',
    'May': 'May',
    'Jun': 'June',
    'Jul': 'July',
    'Aug': 'August',
    'Sep': 'September',
    'Oct': 'October',
    'Nov': 'November',
    'Dec': 'December',
};

const tranformNumbers=(number)=>{
    return (new Date(number*1000)).toLocaleTimeString()
}

function rendFirst(data){
    const toDay = data.list[0]
    .map(el => {
    const newEl = {}
    newEl.min= el.main.temp_min
    newEl.max= el.main.temp_max
    return newEl
   })
   let totalMin = 0;
   let totalMax = 0;
   toDay.forEach(el => {
       totalMin += el.min;
       totalMax += el.max;
    });
    const name = data.city.name
    const country = data.city.country
    const tempMax = Math.round(totalMax/toDay.length);
    const tempMin = Math.round(totalMin/toDay.length);
    const tempNow = Math.round(data.list[0][0].main.temp)
    const icon = data.list[0][0].weather[0].icon
    const up = {name,country,tempNow,tempMin,tempMax,icon};
    if (document.querySelector(".firstpage-up").innerHTML){
        document.querySelector('.today__svg use').setAttribute("href",`./sprite.svg#${icon}`)
        document.querySelector('.today__city').textContent=`${up.name}, ${up.country}`
        document.querySelector('.today__temp').textContent=`${tempNow}`
        document.querySelector('.today__min__temp').textContent=`${tempMin}°`
        document.querySelector('.today__max__temp').textContent=`${tempMax}°`
    }
    else{
        document.querySelector(".firstpage-up").innerHTML= tempFirst(up);
    };
        const toDate = new Date().toDateString().split(' ');
        const time  = new Date().toLocaleTimeString();
        const month = months[toDate[1]];
        const dayNumber = toDate[2];
        const dayOfWeek = toDate[0];
        const sunrise = tranformNumbers(data.city.sunrise);
        const sunset = tranformNumbers(data.city.sunset);
        const down = {time,month,dayNumber,dayOfWeek,sunrise,sunset};
        if(document.querySelector(".firstpage-box").innerHTML){
            document.querySelector('.today-list__number').textContent=`${dayNumber} ${dayOfWeek}`
            document.querySelector('.today-list__dayOfWeek').textContent=`${month}`
            document.querySelector('.today-list__time').textContent=`${time}`
            document.querySelector('.today-list__sunrice').innerHTML = 
            `<svg class="today-list__item__svg"><use href="./sprite.svg#icon-sunrise"></use></svg> ${sunrise}`
            document.querySelector('.today-list__sunset').innerHTML = 
            `<svg class="today-list__item__svg"><use href="./sprite.svg#icon-sunrise"></use></svg> ${sunset}`
        }
        else {
            document.querySelector('.firstpage-box').innerHTML= tempBox(down);
        }

}
 


export {rendFirst}