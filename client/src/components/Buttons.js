import React from 'react';
import { connect } from 'react-redux';
import { deletePrediction, fetchPredictions } from '../actions/predictionActions';
import {bindActionCreators} from 'redux';
import DeleteButton from '../components/DeleteButton';
import CorrectButton from '../components/CorrectButton';
import WrongButton from '../components/WrongButton'


class Buttons extends React.Component {
  constructor() {
    super();

    this.state = {
      test: ''
    }
  }

  handleClick = event => {
    event.preventDefault()
    this.props.deletePrediction(this.props.prediction.id)
    this.props.fetchPredictions()
}
  render() {
    return (
      <div>
      {/*<button onClick={this.handleClick}>Want to save this prediction from further embarrassment? Delete</button>*/}
      <DeleteButton handleClick={this.handleClick}/>
      <CorrectButton />
      <WrongButton />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deletePrediction: deletePrediction,
    fetchPredictions: fetchPredictions
  }, dispatch)}

export default connect(null, mapDispatchToProps)(Buttons)
