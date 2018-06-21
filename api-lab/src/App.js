import React, { Component } from 'react';
import './App.css';
import 'isomorphic-fetch';
import MovieCard from './components/movieCard';
import PeopleCard from './components/peopleCard';


const FILM_API = "https://ghibliapi.herokuapp.com/films"
const PEOPLE_API = "https://ghibliapi.herokuapp.com/people"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      people: []
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
  handleClickPeople() {
    fetch(PEOPLE_API)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        return response
      })
      .then((response) => this.setState({ people: response }))
  };

  render() {
    return (
      <div>
        <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt=""></img>
        <div>
          <button type="button"
            className="btn btn-warning"
            onClick={() => this.handleClick()}>Load Films
      </button>
          <div className="container">
            <div className="row">
              {this.state.movies.map((movie, index) =>
                <MovieCard key={index} movie={movie} />
              )}
            </div>
          </div>
        </div>

        {/* people button */}

        <div>
          <button type="button"
            className="btn btn-warning"
            onClick={() => this.handleClickPeople()}>Load Characters
      </button>
          <div className="container">
            <div className="row">
              {this.state.people.map((people, index) =>
                <PeopleCard key={index} people={people} />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
