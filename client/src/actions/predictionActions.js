import fetch from 'isomorphic-fetch'

export function fetchPredictions() {
  return (dispatch) => {
    dispatch({type: 'LOADING_PREDICTIONS'});
    return fetch('http://localhost:3000/api/predictions').then(resp => resp.json()).then(respJSON =>
    {const predictions = respJSON; return (dispatch({type: 'FETCH_PREDICTIONS', payload: predictions[2].content}))})

      // {const predictions = resp.predictions;
    // return (dispatch({type: 'FETCH_PREDICTIONS', payload: predictions}))
    // console.log(predictions)
  // })
  }
}
