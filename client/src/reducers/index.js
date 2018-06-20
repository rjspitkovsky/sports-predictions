import {combineReducers} from 'redux';
import predictionsReducer from './predictions_reducer';

const rootReducer = combineReducers({
  predictions: predictionsReducer,
})

export default rootReducer
