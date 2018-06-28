import React from 'react';
import { connect } from 'react-redux';
import { addPrediction, fetchPredictions } from '../actions/predictionActions'
// import addPrediction action and connect mapDispatchToProps here

class PredictionsNew extends React.Component {
  constructor(){
    super();

    this.state= {
      content: '',
      sport: '',
      status: 'undetermined'
    }
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const prediction = Object.assign({}, this.state)
    this.props.addPrediction(prediction)
    this.props.fetchPredictions()
  }

  handleContentChange = event => {
    this.setState({
      content: event.target.value
    })
  }

  handleSportChange = event => {
    this.setState({
      sport: event.target.value
    })
  }

  render(){
    return (
      <div>
      <br />
      <br />
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
      <textarea cols="80" rows="5" type="text" onChange={(event) => this.handleContentChange(event)} placeholder="What's your prediction?" /><br />
      <input type="text" onChange={(event) => this.handleSportChange(event)} placeholder="What sport?" /><br />
      <input type="submit" value="Add Prediction" />
      </form>
      </div>
    )
  }
}

export default connect(null, {addPrediction, fetchPredictions})(PredictionsNew)
