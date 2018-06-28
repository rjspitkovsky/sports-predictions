import React, { Component } from 'react';
import {NavBar} from './components/NavBar';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPredictions} from './actions/predictionActions';
import PredictionsPage from './containers/PredictionsPage'
import CorrectPredictionsList from './components/CorrectPredictionsList'
import WrongPredictionsList from './components/WrongPredictionsList'
import PredictionShow from './components/PredictionShow'
import Home from './components/Home'
import Header from './components/Header'
import PredictionsNew from './components/PredictionsNew'

class App extends Component {

  handleClick(event) {
    event.preventDefault();
    this.props.fetchPredictions()
  }



  render() {
    return (
      <Router>
      <div className="App">
      <Header />
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path='/new' component={PredictionsNew} />
      <Route exact path='/predictions' component={PredictionsPage} />
      <Route exact path='/correct' component={CorrectPredictionsList} />
      <Route exact path='/wrong' component={WrongPredictionsList} />
      <Route path='/predictions/:predictionId' component={PredictionShow} />
      </div>
      </Router>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     predictions: state.predictions.predictions
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPredictions: fetchPredictions
  }, dispatch)}


export default connect(mapDispatchToProps)(App);
