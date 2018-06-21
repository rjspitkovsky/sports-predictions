function predictionsReducer(state = {loading: false, predictions: []}, action) {
  switch(action.type) {
    case 'LOADING_PREDICTIONS':
    return Object.assign({}, state, {loading: true})
    case 'FETCH_PREDICTIONS':
    return state = [action.payload]
    case 'FETCH_CORRECT_PREDICTIONS':
    return {loading: false, predictions: action.payload}
    case 'FETCH_WRONG_PREDICTIONS':
    return {loading: false, predictions: action.payload}
    default:
    return state;
  }
}

export default predictionsReducer;
