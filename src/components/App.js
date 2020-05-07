import React from 'react';
import '../styling/App.css';
import Movies from './Movies';
import moviesJson from '../movies.json';

class MovieApp extends React.Component {
  constructor(props) {
    super(props)

    this.handleType = this.handleType.bind(this)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.state = {
      movies: moviesJson.movies
    }
  }

  handleType(option) {
    console.log("handleType", "App.js", option)
  }

  handleDeleteOptions() {
    console.log("Deleting all")
    this.setState(() => ({ movies : [] }))
  }

  render() {
    return (
      <div>
        <Movies movies={this.state.movies} handleDeleteOptions={this.handleDeleteOptions} />
      </div>
    )
  }
}

export default MovieApp;