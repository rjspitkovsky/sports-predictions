import React from 'react';

const CorrectButton = (props) => {
  return (
    <button onClick={props.handleCorrect}>This is the button for when a prediction turns out to be true</button>
  )
}

export default CorrectButton
