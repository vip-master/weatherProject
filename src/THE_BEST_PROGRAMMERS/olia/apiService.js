const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?`
const key = 'c3938c5b8fa5438c627633d1d16f97b8'
// 68e2e449771b30ae0c8958ab705e7469
function fetchWeather(targetCity){
    return fetch(`${baseUrl}q=${targetCity}&appid=${key}`)
    .then(response=>response.json())
}

export default {fetchWeather}
