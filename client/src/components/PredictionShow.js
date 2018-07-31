import React from 'react';
import { connect } from 'react-redux';
import Prediction from '../components/Prediction';

const PredictionShow = prediction => {


  return (
    <div>
      <Prediction prediction={prediction} />
      </div>
  )
}

const mapStateToProps = (state, ownProps) => {
// Using the predictionId param from the Link URL to find the prediction with the same ID. Then pass it to the Prediction component which will render it
  const prediction = state.predictions.predictions.find(prediction => prediction.id === parseInt(ownProps.match.params.predictionId))
  return  prediction
}


export default connect(mapStateToProps)(PredictionShow)
