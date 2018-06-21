import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PredictionsList from '../components/PredictionsList'
// import other components here

const PredictionsPage = ({match}) =>
  <div>
  {/*<br />other child components here like PredictionsList */}
  <PredictionsList  />
  {/*<PredictionsNew /> */}
  <Route path={`${match.url}/:movieId`} render={() => <div><br />This is the show component for a prediction</div>} />
  {/* <Route exact path={match.url} component={PredictionsList} /> */}
  </div>



const mapStateToProps = (state) => {
  return {
    predictions: state.predictions.predictions
  }
}

export default connect(mapStateToProps)(PredictionsPage);
