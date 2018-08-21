import axios from 'axios';

// const getWeather = () => ({
//     type: 'GET_WEATHER',
//     payload: axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}`)
//   });

export function getWeatherInfo(city) {
  return {
    type: 'GET_WEATHER_INFO',
    payload: axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=a82f8cdc5fa15a3e0e7c14be45117dee")
    .then(response => {
      console.log(response)
      return response;
  })
  .catch((err)=> {
      console.log(err);
  })
  }
}

export function updateCitySearch(city) {
  return {
    type: 'UPDATE_CITY_SEARCH',
    payload: city
  }
}
