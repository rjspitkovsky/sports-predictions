import fetch from 'isomorphic-fetch'

export function fetchPredictions() {
  return (dispatch) => {
    dispatch({type: 'LOADING_PREDICTIONS'});
    return fetch('/api/predictions')
    .then(response => return (dispatch({type: 'FETCH_PREDICTIONS', payload: response})))
  }
}
