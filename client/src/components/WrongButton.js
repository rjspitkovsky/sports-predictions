import React from 'react';

const WrongButton = (props) => {
  return (
    <button onClick={props.handleWrong}>This is the button when a prediction is terribly wrong</button>
  )
}

export default WrongButton
