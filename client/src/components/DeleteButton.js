import React from 'react';

class DeleteButton extends React.Component {
  constructor() {
    super();

    this.state = {
      test: ''
    }
  }

  handleClick = event => {
    if (this.state.test === "") {
    this.setState({
      test: "You've clicked me!"
    })
  } else {
    this.setState({
      test: ""
    })
  }
}
  render() {
    return (
      <div>
      <p> "Want to save this prediction from further embarrassment? Delete button below"</p>
      <button onClick={this.handleClick}/>
      {this.state.test}
      </div>
    )
  }
}

export default DeleteButton
