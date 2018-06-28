import React from 'react';
import '../stylesheets/button.css';

const DeleteButton = (props) => {

  return (
        <button className="button" onClick={props.handleClick}>Want to save this prediction from further embarrassment? Delete</button>
  )
}

export default DeleteButton
