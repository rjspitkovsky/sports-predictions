import fetch from 'isomorphic-fetch'

// RIPE FOR REFACTORING INTO ONE MEGA METHOD

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

export function fetchWrongPredictions() {
  return(dispatch) => {
    dispatch({type: 'LOADING_PREDICTIONS'});
    return fetch('http://localhost:3000/api/wrong').then(resp => resp.json()).then(respJSON =>
    {const wrongPredictions = respJSON;
    wrongPredictions.forEach(prediction => (dispatch({type: 'FETCH_WRONG_PREDICTIONS', payload: prediction})))})
  }
}

export function addPrediction(data) {
  return (dispatch) => {
    dispatch({type: 'LOADING_PREDICTIONS'});
    return fetch('http://localhost:3000/api/predictions', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
}


export function deletePrediction(id) {
  // console.log(id)
  return (dispatch) => {
    dispatch({type: 'LOADING_PREDICTIONS'});
    return fetch('http://localhost:3000/api/predictions/' + id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id)
    })
  }
}

export function updateCorrectPrediction(prediction) {
  return (dispatch) => {
    dispatch({type: 'LOADING_PREDICTIONS'});
    return fetch('http://localhost:3000/api/predictions/' + prediction.id, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(prediction)
    }).then(resp => console.log(resp))
  }
}

export function updateWrongPrediction(prediction) {
  return (dispatch) => {
    dispatch({type: 'LOADING_PREDICTIONS'});
    return fetch('http://localhost:3000/api/predictions/' + prediction.id, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(prediction)
    }).then(resp => console.log(resp))
  }
}
