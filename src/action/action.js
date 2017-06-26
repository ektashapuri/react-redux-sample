import fetch from 'isomorphic-fetch'

export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'

export function setHeader(url, dataToSend){
  const headerToSend = {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Acccept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToSend)
  }
  return (headerToSend)
}
export function receiveWeather(details){
  return{
    type: RECEIVE_WEATHER,
    detals,
  }
}

export function fetchWeather(){
  const url = '';
  const getHeader = setHeader();
  return function d(dispatch){
    return fetch(url, getHeader)
    .then(response => response.json())
    .then((response) => {
      dispatch(receiveWeather(response))
    })
  }
}
