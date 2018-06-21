import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCorrectPredictions} from '../actions/predictionActions';
import Prediction from '../components/Prediction'


class PredictionsList extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchCorrectPredictions()
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


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCorrectPredictions: fetchCorrectPredictions
  }, dispatch)}

export default connect(mapStateToProps, mapDispatchToProps)(PredictionsList);
