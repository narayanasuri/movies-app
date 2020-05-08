import React from 'react';
import '../styling/App.scss';
import moviesJson from '../movies.json';
import CoverMovie from './CoverMovie';
import InputNav from './InputNav';

class MovieApp extends React.Component {
  constructor(props) {
    super(props)

    this.handleType = this.handleType.bind(this)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.selectMovie = this.selectMovie.bind(this)
    this.state = {
      movies: moviesJson.movies,
      selectedMovie: undefined,
      suggestions: []
    }
  }

  handleType(queryString) {
    if(queryString && queryString!=="") {
      this.setState(() => ({
        suggestions: moviesJson.movies.filter((movie) => (movie.title.toLowerCase().startsWith(queryString)))
      }))
    } else {
      this.setState(() => ({
        suggestions: []
      }))
    }
  }

  handleDeleteOptions() {
    console.log("Deleting all")
    this.setState(() => ({ movies: [] }))
  }

  selectMovie(movie) {
    this.setState(() => ({
      selectedMovie: movie,
      suggestions: []
    }))
  }

  render() {
    return (
      <div>
        <InputNav 
          movies={this.state.movies} 
          suggestions={this.state.suggestions} 
          handleType={this.handleType}
          selectMovie={this.selectMovie} />
        <CoverMovie movie={this.state.selectedMovie} />
      </div>
    )
  }
}

export default MovieApp;