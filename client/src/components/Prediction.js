import React from 'react';
import  Buttons  from '../components/Buttons'
import '../stylesheets/prediction.css'

const Prediction = ({prediction, key}) => {


  return (

      <div id={prediction.id} className="prediction">
      <h1>{prediction.content}</h1><br />
      <p>{prediction.sport}</p><br />
      <p>{prediction.status}</p><br />
      <Buttons prediction={prediction} />
      </div>

 )
}


export default Prediction
