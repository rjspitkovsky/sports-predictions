import React from 'react';
import { connect } from 'react-redux';
import {fetchPredictions} from '../actions/predictionActions';
import Prediction from '../components/Prediction';


class PredictionsList extends React.Component {
  constructor(props) {
    super(props);
    this.delayFetchPredictions(props)
  }

  delayFetchPredictions = (props) => setTimeout(function() {props.fetchPredictions()}, 100)



  render() {
    return (
      <div>
    {this.props.predictions.map((prediction, index) =>
      <Prediction key={index} prediction={prediction} />
    )}
    </div>
  )
  }

}

const mapStateToProps = (state) => {
  return {
    predictions: state.predictions.predictions
  }
}


export default connect(mapStateToProps, {fetchPredictions})(PredictionsList);
