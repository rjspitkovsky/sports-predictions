import React from 'react';

// import addPrediction action and connect mapDispatchToProps here

class PredictionsNew extends React.Component {
  constructor(){
    super();

    this.state= {
      prediction: []
    }
  }

  handleOnSubmit = event => {
    event.preventDefault()
  }

  handleOnChange = event => {
    this.setState({
      prediction: "See your prediction"
    })
  }

  render(){
    return (
      <div>
      <br />
      <br />
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
      <input type="text" onChange={(event) => this.handleOnChange(event)} placeholder="What's your prediction?" /><br />
      <input type="text" placeholder="What sport?" /><br />
      <input type="submit" value="Add Prediction" />
      </form>
      <h2>{this.state.prediction}</h2>
      </div>
    )
  }
}

export default PredictionsNew
