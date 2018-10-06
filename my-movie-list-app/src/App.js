  import React, { Component } from 'react';
  // import logo from './logo.svg';
  import './App.css';
  import myMovieList from './movieList.json';
  import MovieRepo from './MovieRepo.jsx';
  
  class App extends Component {
    render() {
      const moviesRepos = myMovieList.map((movie, index) => {
        return (
          <MovieRepo key={index} movie={movie} />
        )
      })
  
      return (
        <ul>
          {moviesRepos}
        </ul>
      );
    }
  }
  
  export default App;

// ***********************************************************

