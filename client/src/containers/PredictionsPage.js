import React from 'react';
import { connect } from 'react-redux';
import PredictionsList from '../components/PredictionsList'
import PredictionsNew from '../components/PredictionsNew'

// import other components here

const PredictionsPage = ({match}) =>
  <div>
  {/*<Route exact path={`/:predictionId`} component={PredictionShow} />*/}
  <PredictionsNew />
  <PredictionsList  />
  {/*<PredictionsNew /> */}
  {/* <Route exact path={match.url} component={PredictionsList} /> */}
  </div>



const mapStateToProps = (state) => {
  return {
    predictions: state.predictions.predictions
  }
}

export default connect(mapStateToProps)(PredictionsPage);
