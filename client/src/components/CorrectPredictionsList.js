import React from 'react';
import { connect } from 'react-redux';
import {fetchPredictions} from '../actions/predictionActions';
import Prediction from '../components/Prediction'


class CorrectPredictionsList extends React.Component {
  constructor(props) {
    super(props);
    const keyword = "correct"
    this.props.fetchPredictions(keyword)
  }


  render() {
    return (
      <div>
    {this.props.predictions.map((prediction, index) =>
      <Prediction  key={index} prediction={prediction} />

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

export default connect(mapStateToProps, {fetchPredictions})(CorrectPredictionsList);
