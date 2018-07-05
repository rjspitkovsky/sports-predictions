import React from 'react';
import  Buttons  from '../components/Buttons'
import '../stylesheets/prediction.css';
import { Link } from 'react-router-dom';

const Prediction = ({prediction, key}) => {
  {/*reformating the date*/}
  const createdAtTimestamp = (prediction.created_at)
  const createdAt = new Date(createdAtTimestamp)
  const date = createdAt.toLocaleString(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })


  return (

      <div id={prediction.id} className="prediction">
      <Link to={`/predictions/${prediction.id}`}>Prediction ID: {prediction.id}</Link>
      <h1>{prediction.content}</h1><br />
      <p>{prediction.sport}</p><br />
      <p>{prediction.status}</p><br />
      <p>{date}</p><br />
      <Buttons prediction={prediction} />
      </div>

 )
}


export default Prediction
