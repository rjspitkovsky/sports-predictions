import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWrongPredictions} from '../actions/predictionActions';
import Prediction from '../components/Prediction'


class WrongPredictionsList extends React.Component {
  constructor(props) {
    super(props);
    document.getElementsByClassName(".prediction-div").innerHTML = "";
    this.props.fetchWrongPredictions()
  }


  render() {
    return (
      <div className="prediction-div">
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
    fetchWrongPredictions: fetchWrongPredictions
  }, dispatch)}

export default connect(mapStateToProps, mapDispatchToProps)(WrongPredictionsList);
