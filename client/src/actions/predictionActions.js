import fetch from 'isomorphic-fetch'

// ONE ACTION FOR GET,POST,PATCH,DELETE FETCH REQUESTS


export function fetchPredictions(keyword = "predictions") {
  return (dispatch) => {
    // Resets the state so past predictions do not render out of place or render multiple times
    dispatch({type: 'LOADING_PREDICTIONS'});
    return fetch(`http://localhost:3000/api/${keyword}`).then(resp => resp.json()).then(respJSON =>
    {const predictions = respJSON;
      (dispatch({type: 'FETCH_PREDICTIONS', payload: predictions}))})
  }
}

export function addPrediction(data) {
  return (dispatch) => {
  //   dispatch({type: 'LOADING_PREDICTIONS'});
    return fetch('http://localhost:3000/api/predictions', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json()).then(respJSON => (dispatch({type: 'ADD_PREDICTION', payload: respJSON})))
}
}


export function deletePrediction(id) {
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

export function updatePrediction(prediction) {
  return (dispatch) => {
    dispatch({type: 'LOADING_PREDICTIONS'});
    return fetch('http://localhost:3000/api/predictions/' + prediction.id, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(prediction)
    })
  }
}
