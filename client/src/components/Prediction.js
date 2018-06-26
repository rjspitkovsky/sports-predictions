import React from 'react';
import { connect } from 'react-redux';
import { deletePrediction } from '../actions/predictionActions'

const Prediction = ({prediction, key}) => {

  return (
      <div id={prediction.id}>
      <p>{prediction.content}</p><br />
      <p>{prediction.sport}</p><br />
      <p>{prediction.status}</p><br />
      <h3> "Want to save this prediction from further embarassment?"</h3>
      <button onClick={(event) => this.props.deletePrediction(event)}/>
      </div>
 )
}

export default connect(null, {deletePrediction})(Prediction)
