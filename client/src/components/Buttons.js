import React from 'react';
import { connect } from 'react-redux';
import { deletePrediction, fetchPredictions, updatePrediction} from '../actions/predictionActions';
import {bindActionCreators} from 'redux';
import DeleteButton from '../components/DeleteButton';
import CorrectButton from '../components/CorrectButton';
import WrongButton from '../components/WrongButton'


class Buttons extends React.Component {

// Allows database to finish updating before fetchPredictions is called
  delayFetchPredictions = (props) => setTimeout(function() {props.fetchPredictions()}, 100)

  handleDelete = event => {
    event.preventDefault()
    this.props.deletePrediction(this.props.prediction.id)
    this.delayFetchPredictions(this.props)
}

// Potential area to refactor

  handleCorrect = event => {
    event.preventDefault()
    this.props.prediction.status = "correct"
    this.props.updatePrediction(this.props.prediction)
    this.delayFetchPredictions(this.props)
  }

  handleWrong = event => {
    event.preventDefault()
    this.props.prediction.status = "wrong"
    this.props.updatePrediction(this.props.prediction)
    this.delayFetchPredictions(this.props)
  }

// Wanted to provide some conditional rendering: If a prediction is still undetermined it can't be deleted but it can be marked correct or wrong. If a prediction is wrong then it can only be deleted but cannot be changed to correct. If a prediction is correct then it just has to remain there in all its glory.

  render() {
    return (
      <div>

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
    updatePrediction: updatePrediction
  }, dispatch)}

export default connect(null, mapDispatchToProps)(Buttons)
