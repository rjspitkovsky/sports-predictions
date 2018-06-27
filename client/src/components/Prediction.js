import React from 'react';
import  Buttons  from '../components/Buttons'

const Prediction = ({prediction, key}) => {

if (prediction.id !== "undefined") {
  return (

      <div id={prediction.id}>
      <p>{prediction.content}</p><br />
      <p>{prediction.sport}</p><br />
      <p>{prediction.status}</p><br />
      <Buttons prediction={prediction} />
      </div>

 )
}
}

export default Prediction
