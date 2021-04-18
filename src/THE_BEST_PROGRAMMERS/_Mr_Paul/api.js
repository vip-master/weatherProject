function fetchCountries(countryName) {
    return fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=939eab3895e9f452425ca7e40505d9c8`,
      ).then(res => res.json());
  }
  
  export default fetchCountries;