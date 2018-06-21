import React from 'react';

const Prediction = ({prediction, key}) => {
  return (
      <div key={key}>
      <p>{prediction.content}</p><br />
      <p>{prediction.sport}</p><br />
      <p>{prediction.status}</p><br />
      </div>
 )
  }

export default Prediction
