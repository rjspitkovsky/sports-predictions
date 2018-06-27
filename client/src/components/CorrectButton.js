import React from 'react';

const CorrectButton = (props) => {
  return (
    <div>
    <button onClick={props.handleCorrect}>This is the button for when a prediction turns out to be true</button>
    </div>
  )
}

export default CorrectButton
