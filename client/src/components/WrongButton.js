import React from 'react';

const WrongButton = (props) => {
  return (
    <div>
    <button onClick={props.handleWrong}>This is the button when a prediction is terribly wrong</button>
    </div>
  )
}

export default WrongButton
