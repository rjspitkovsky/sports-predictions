function predictionsReducer(state = {predictions: []}, action) {
  switch(action.type) {
    case 'LOADING_PREDICTIONS':
    return state = {predictions: []}
    case 'FETCH_PREDICTIONS':
    const predictions = {predictions: [...state.predictions, action.payload]}
    return Object.assign({}, predictions)
    case 'FETCH_CORRECT_PREDICTIONS':
    const correctPredictions = {predictions: [...state.predictions, action.payload]}
    return Object.assign({}, correctPredictions)
    case 'FETCH_WRONG_PREDICTIONS':
    const wrongPredictions = {predictions: [...state.predictions, action.payload]}
    return Object.assign({}, wrongPredictions)
    case 'ADD_PREDICTION':
    const addedSinglePrediction = {predictions: [...state.predictions, action.payload]}
    return Object.assign({}, addedSinglePrediction)
    default:
    return state;
  }
}

export default predictionsReducer;
