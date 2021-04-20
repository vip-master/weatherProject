const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?`
const key = `411db9b3794883c087439e6ee04dd949`

function fetchWeather(options){
    let city;
let latitude;
let longitude;
    if(typeof options==='object'){
        latitude= options.latitude
        longitude= options.longitude
        city =''
    }
    else{
        city = options
        latitude = ''
        longitude = ''
    }
    return fetch(`${baseUrl}lat=${latitude}&lon=${longitude}&appid=${key}&q=${city}&units=metric`)
    .then(response=>response.json())
}

export default {fetchWeather}
