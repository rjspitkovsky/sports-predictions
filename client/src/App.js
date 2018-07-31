import React, { Component } from 'react';
import {NavBar} from './components/NavBar';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PredictionsPage from './containers/PredictionsPage'
import PredictionShow from './components/PredictionShow'
import Home from './components/Home'
import Header from './components/Header'
import PredictionsNew from './components/PredictionsNew'
import PredictionsList from './components/PredictionsList'

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
      <Header />
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path='/new' component={PredictionsNew} />
      <Route exact path='/predictions' component={PredictionsPage} />
      <Route exact path='/correct' render={(props) => <PredictionsList {...props} keyword={"correct"} />} />
      <Route exact path='/wrong' render={(props) => <PredictionsList {...props} keyword={"wrong"} />} />
      <Route path='/predictions/:predictionId' component={PredictionShow} />
      </div>
      </Router>
    );
  }
}


export default App
