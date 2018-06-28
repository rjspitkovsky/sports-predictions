import React from 'react';
import { connect } from 'react-redux';
import { deletePrediction, fetchPredictions, updateCorrectPrediction, updateWrongPrediction } from '../actions/predictionActions';
import {bindActionCreators} from 'redux';
import DeleteButton from '../components/DeleteButton';
import CorrectButton from '../components/CorrectButton';
import WrongButton from '../components/WrongButton'


class Buttons extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    }
  }


  delayFetchPredictions = (props) => setTimeout(function() {props.fetchPredictions()}, 100)

  handleDelete = event => {
    event.preventDefault()
    this.props.deletePrediction(this.props.prediction.id)
    this.delayFetchPredictions(this.props)
}

  handleCorrect = event => {
    event.preventDefault()
    this.props.prediction.status = "correct"
    this.props.updateCorrectPrediction(this.props.prediction)
    this.delayFetchPredictions(this.props)
  }

  handleWrong = event => {
    event.preventDefault()
    this.props.prediction.status = "wrong"
    this.props.updateWrongPrediction(this.props.prediction)
    this.delayFetchPredictions(this.props)
  }


  render() {
    return (
      <div>
      {/*<button onClick={this.handleClick}>Want to save this prediction from further embarrassment? Delete</button>*/}
      {this.props.prediction.status === "wrong" ?
        <DeleteButton handleClick={this.handleDelete}/>
        : null}

        {this.props.prediction.status === "undetermined" ?
        <div>
      <CorrectButton handleCorrect={this.handleCorrect}/>
      <WrongButton handleWrong={this.handleWrong}/>
      </div>
      : null}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deletePrediction: deletePrediction,
    fetchPredictions: fetchPredictions,
    updateCorrectPrediction: updateCorrectPrediction,
    updateWrongPrediction: updateWrongPrediction
  }, dispatch)}

export default connect(null, mapDispatchToProps)(Buttons)
