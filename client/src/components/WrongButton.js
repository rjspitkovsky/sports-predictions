import React from 'react';
import '../stylesheets/button.css';

const WrongButton = (props) => {
  return (
    <div>
    <button className="button" onClick={props.handleWrong}>This is the button when a prediction is terribly wrong</button>
    </div>
  )
}

export default WrongButton
