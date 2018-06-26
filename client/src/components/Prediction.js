import React from 'react';
import  DeleteButton  from '../components/DeleteButton'

const Prediction = ({prediction, key}) => {

  return (
      <div id={prediction.id}>
      <p>{prediction.content}</p><br />
      <p>{prediction.sport}</p><br />
      <p>{prediction.status}</p><br />
      <DeleteButton predictionId={prediction.id} />
      </div>
 )
}

export default Prediction
