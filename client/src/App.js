import React, { Component } from 'react';
import {NavBar} from './components/NavBar';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPredictions} from './actions/predictionActions';

class App extends Component {

  handleClick(event) {
    event.preventDefault();
    this.props.fetchPredictions()
  }



  render() {
    return (
      <Router>
      <div className="App">
      <NavBar />
      <Route exact path="/" render={() => <div>Home</div>} />
      <Route path='/predictions' render={() => <div>Predictions</div>} />
      <Route path='/correct' render={() => <div>Correct</div>} />
      <Route path='/wrong' render={() => <div>Wrong</div>} />
      </div>
      </Router>
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
