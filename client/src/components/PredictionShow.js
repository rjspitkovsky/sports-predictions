import React from 'react';
import { connect } from 'react-redux';
import Prediction from '../components/Prediction';
import {bindActionCreators} from 'redux';
import {fetchPredictions} from '../actions/predictionActions';

const PredictionShow = prediction => {


  return (
    <div>
      <Prediction prediction={prediction} />
      </div>
  )
}

const mapStateToProps = (state, ownProps) => {

  const prediction = state.predictions.predictions.find(prediction => prediction.id === parseInt(ownProps.match.params.predictionId))
  // if (prediction === undefined) {
  // const predictionDemo = {id: 1, content: "The Brooklyn Nets will make next year's playoffs", sport: "NBA"}
  return prediction
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPredictions: fetchPredictions
  }, dispatch)}

export default connect(mapStateToProps, mapDispatchToProps)(PredictionShow)
