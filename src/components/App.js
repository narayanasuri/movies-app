import React from 'react';
import '../styling/App.scss';
import LandingPage from './LandingPage';

class MovieApp extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="main-container">
        <LandingPage />
      </div>
    )
  }
}

export default MovieApp;