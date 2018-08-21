import moment from 'moment';
// import { } from '.navbarAction';

const defaultState = {
   city: '',
   history: [],
   weatherData: null

}

export default function navbarReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'UPDATE_CITY_SEARCH': {
            return {
                ...state,
                city: payload
            };
        }

        case 'GET_WEATHER_INFO_FULFILLED': {
            return {
                ...state,
               weatherData: payload.data,
               history: [
                   ...state.history,
                   {name: payload.data.name, date: moment().format('MMMM Do YYYY'), time: moment().format('h:mm:ss a')}
               ]
            }
        }
        default: {
            return state
        }
    }


}


// export function getWeatherInfo(c);

// export function getWeather(c);

// export function updateCitySearch(c);