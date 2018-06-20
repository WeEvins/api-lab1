import React, { Component } from 'react';
import './App.css';
import 'isomorphic-fetch';
import movieCard from './components/movieCard';

const FILM_API = "https://ghibliapi.herokuapp.com"

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
      .then((response) => this.setState({movies: response}))
  };

  render() {
    return (
      <button type="button"
        class="btn btn-warning"
        onClick={this.handleClick}>Load Films
      </button>
    );

  }
}

export default App;
