import fetch from 'isomorphic-fetch'

export function fetchPredictions() {
  return (dispatch) => {
    dispatch({type: 'LOADING_PREDICTIONS'});
    return fetch('http://localhost:3000/api/predictions').then(resp => resp.json()).then(respJSON =>
    {const predictions = respJSON;
      predictions.forEach(prediction => (dispatch({type: 'FETCH_PREDICTIONS', payload: prediction})))})
  }
}

export function fetchCorrectPredictions() {
  return (dispatch) => {
    dispatch({type: 'LOADING_PREDICTIONS'});
    return fetch('http://localhost:3000/api/correct').then(resp => resp.json()).then(respJSON =>
    {const correctPredictions = respJSON;
    correctPredictions.forEach(prediction => (dispatch({type: 'FETCH_CORRECT_PREDICTIONS', payload: prediction})))})
  }
}
