import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPredictions} from './actions/predictionActions';

class App extends Component {
  constructor() {
    super();

    this.state = {
      predictions: []
    }
  }
  handleClick(event) {
    event.preventDefault();
    this.props.fetchPredictions()
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello React! If this works I should see this text on my screen</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={(event) => this.handleClick(event)}>Click to see predictions</button>

        <div>
        {this.props.predictions.map((prediction, index) => <p>{prediction.content}<br />
          <h2>{prediction.sport}</h2><br />
          <h3>{prediction.status}</h3><br />
          </p>)}
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    predictions: state.predictions.predictions
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPredictions: fetchPredictions
  }, dispatch)}


export default connect(mapStateToProps, mapDispatchToProps)(App);
