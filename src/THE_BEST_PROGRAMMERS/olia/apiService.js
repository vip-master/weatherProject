const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?`
const key = `411db9b3794883c087439e6ee04dd949`

function fetchWeather(targetCity){
    return fetch(`${baseUrl}q=${targetCity}&appid=${key}`)
    .then(response=>response.json())
}

export default {fetchWeather}
