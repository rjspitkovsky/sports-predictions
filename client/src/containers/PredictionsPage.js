import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import other components here

const PredictionsPage = ({match, predictions}) =>
  <div>
  /*<br />other child components here */
  <Route path={`${match.url}/:movieId`} render={() => <div><br />This is the show component for a prediction</div>} />
  <Route exact path={match.url} render={() => <div><br />Please view all predictions here</div>} />
  </div>



const mapStateToProps = (state) => {
  return {
    predictions: state.predictions.predictions
  }
}

export default connect(mapStateToProps)(PredictionsPage);
