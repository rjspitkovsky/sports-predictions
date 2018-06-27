function predictionsReducer(state = {predictions: []}, action) {
  switch(action.type) {
    case 'LOADING_PREDICTIONS':
    // return Object.assign({}, state, {loading: true})
    return state = {predictions: []}
    case 'FETCH_PREDICTIONS':
    // return state = [...state.predictions, action.payload]
    const predictions = {predictions: [...state.predictions, action.payload]}
    return Object.assign({}, predictions)
    // return state = [state.predictions, action.payload]
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
