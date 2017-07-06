import fetch from 'isomorphic-fetch'

export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'

export function receiveWeather(details){
  return{
    type: RECEIVE_WEATHER,
    details,
  }
}

export function fetchWeather(place){
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${place}&appId=1eb72e13a53fc12cacce8f2452ca3a52`;
  return function d(dispatch){
    return fetch(url)
    .then(response => response.json())
    .then((response) => {
      dispatch(receiveWeather(response))
    })
  }
}
