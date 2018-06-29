function predictionsReducer(state = {predictions: []}, action) {
  switch(action.type) {
    case 'LOADING_PREDICTIONS':
    return state = {predictions: []}
    case 'FETCH_PREDICTIONS':
    const predictions = {predictions: [...state.predictions, action.payload]}
    return Object.assign({}, predictions)
    default:
    return state;
  }
}

export default predictionsReducer;
