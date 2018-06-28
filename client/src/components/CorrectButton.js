import React from 'react';
import '../stylesheets/button.css';

const CorrectButton = (props) => {
  return (
    <div>
    <button className="button" onClick={props.handleCorrect}>This is the button for when a prediction turns out to be true</button>
    </div>
  )
}

export default CorrectButton
