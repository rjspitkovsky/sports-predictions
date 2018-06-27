import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPredictions} from '../actions/predictionActions';
import Prediction from '../components/Prediction';
import { deletePrediction } from '../actions/predictionActions'
import { Link } from 'react-router-dom';



class PredictionsList extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchPredictions()
  }

  shouldComponentUpdate(nextProps) {
    return (this.props.predictions !== nextProps.predictions)
  }

  handleClick(event) {
    event.preventDefault()
    console.log(event.target.value.id)
    // this.props.deletePrediction(prediction)

  }


  render() {
    return (
      <div>
    {this.props.predictions.map((prediction, index) =>
      <div>
      <Link to={`/predictions/${prediction.id}`}>{prediction.id}</Link>
      <Prediction  handleClick={this.handleClick} key={index} prediction={prediction} />
      </div>
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
    fetchPredictions: fetchPredictions,
    deletePrediction: deletePrediction
  }, dispatch)}

export default connect(mapStateToProps, mapDispatchToProps)(PredictionsList);
