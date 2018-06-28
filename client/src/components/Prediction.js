import React from 'react';
import  Buttons  from '../components/Buttons'
import '../stylesheets/prediction.css';
import { Link } from 'react-router-dom';

const Prediction = ({prediction, key}) => {


  return (

      <div id={prediction.id} className="prediction">
      <Link to={`/predictions/${prediction.id}`}>Prediction ID: {prediction.id}</Link>
      <h1>{prediction.content}</h1><br />
      <p>{prediction.sport}</p><br />
      <p>{prediction.status}</p><br />
      <Buttons prediction={prediction} />
      </div>

 )
}


export default Prediction
