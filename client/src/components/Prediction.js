import React from 'react';
import { connect } from 'react-redux';
import { deletePrediction } from '../actions/predictionActions'
import  DeleteButton  from '../components/DeleteButton'

const Prediction = ({prediction, key}) => {

  return (
      <div id={prediction.id}>
      <p>{prediction.content}</p><br />
      <p>{prediction.sport}</p><br />
      <p>{prediction.status}</p><br />
      <DeleteButton />
      </div>
 )
}

export default connect(null, {deletePrediction})(Prediction)
