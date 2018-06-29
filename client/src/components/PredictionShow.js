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

  const prediction = state.predictions.predictions.find(prediction => prediction.id === parseInt(ownProps.match.params.predictionId))
  return prediction
}


export default connect(mapStateToProps)(PredictionShow)
