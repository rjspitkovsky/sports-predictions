import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPredictions, deletePrediction, addPredictionToState} from '../actions/predictionActions';
import Prediction from '../components/Prediction';
import { Link } from 'react-router-dom';



class PredictionsList extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchPredictions()
  }

  // componentDidMount() {
  //   this.props.predictions.forEach(prediction => this.props.addPredictionToState(prediction))
  // }



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
      {/*this.props.addPredictionToState(prediction)*/}
      {/*<Link to={`/predictions/${prediction.id}`}>{prediction.id}</Link>*/}
      <Prediction key={index} prediction={prediction} />
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
    deletePrediction: deletePrediction,
    addPredictionToState: addPredictionToState
  }, dispatch)}

export default connect(mapStateToProps, mapDispatchToProps)(PredictionsList);
