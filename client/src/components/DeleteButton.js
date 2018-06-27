import React from 'react';

const DeleteButton = (props) => {

  return (
        <button onClick={props.handleClick}>Want to save this prediction from further embarrassment? Delete</button>
  )
}

export default DeleteButton
