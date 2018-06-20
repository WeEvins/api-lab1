import React, { Component } from 'react';
import './App.css';
import 'isomorphic-fetch';
import MovieCard from './components/movieCard';

const FILM_API = "https://ghibliapi.herokuapp.com/films"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  };

  handleClick() {
    fetch(FILM_API)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        return response
      })
      .then((response) => this.setState({ movies: response }))
  };

  render() {
    return (
      <div>
        <button type="button"
          className="btn btn-warning"
          onClick={() => this.handleClick()}>Load Films
      </button>

        {this.state.movies.map((movie, index) =>
          <MovieCard key={index} movie={movie}/>
        )}
      </div>
    );
  }
}

export default App;
