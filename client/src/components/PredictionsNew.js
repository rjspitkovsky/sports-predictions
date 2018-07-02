import React from 'react';
import { connect } from 'react-redux';
import { addPrediction, fetchPredictions } from '../actions/predictionActions'


class PredictionsNew extends React.Component {
  constructor(){
    super();


  // this.state is the object that will be turned to a Prediction object and saved in the database. The status value is defaulted to "undetermined"
    this.state= {
      content: '',
      sport: '',
    }
  }

  // Allows database to finish updating before fetchPredictions is called
  delayFetchPredictions = (props) => setTimeout(function() {props.fetchPredictions()}, 100)

  handleOnSubmit = event => {
    event.preventDefault()
    // Clears the form 
    event.target.reset()
    this.props.addPrediction(this.state)
    this.delayFetchPredictions(this.props)
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
