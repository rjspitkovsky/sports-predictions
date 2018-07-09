function predictionsReducer(state = {predictions: []}, action) {
  switch(action.type) {
    case 'LOADING_PREDICTIONS':
    return state = {predictions: []}
    // Each prediction is added to the state as the action function iterates through all the predictions in the database
    case 'FETCH_PREDICTIONS':
    return {predictions: [...state.predictions, action.payload]}
    default:
    return state;
  }
}

export default predictionsReducer;
