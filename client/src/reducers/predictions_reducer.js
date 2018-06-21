function predictionsReducer(state = {predictions: []}, action) {
  switch(action.type) {
    case 'LOADING_PREDICTIONS':
    return Object.assign({}, state, {loading: true})
    return state = [{}, state]
    case 'FETCH_PREDICTIONS':
    // return state = [...state.predictions, action.payload]
    const predictions = {predictions: [...state.predictions, action.payload]}
    return Object.assign({}, predictions)
    // return state = [state.predictions, action.payload]
    case 'FETCH_CORRECT_PREDICTIONS':
    return {loading: false, predictions: action.payload}
    case 'FETCH_WRONG_PREDICTIONS':
    return {loading: false, predictions: action.payload}
    default:
    return state;
  }
}

export default predictionsReducer;
