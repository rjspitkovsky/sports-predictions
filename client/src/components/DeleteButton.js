import React from 'react';
import { connect } from 'react-redux';
import { deletePrediction } from '../actions/predictionActions';
import {bindActionCreators} from 'redux';


class DeleteButton extends React.Component {
  constructor() {
    super();

    this.state = {
      test: ''
    }
  }

  handleClick = event => {
    event.preventDefault()
    this.props.deletePrediction(this.props.predictionId)
}
  render() {
    return (
      <div>
      <button onClick={this.handleClick}>Want to save this prediction from further embarrassment? Delete</button>
      {this.state.test}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deletePrediction: deletePrediction
  }, dispatch)}

export default connect(null, mapDispatchToProps)(DeleteButton)
