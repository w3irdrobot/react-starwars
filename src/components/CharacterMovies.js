import React from 'react';
import { connect } from 'react-redux';

const CharacterMovies = ({ movies }) =>
  <div id='character-movies' className='col-md-6'>
    <h1>Movies</h1>
    <ul>
      {movies.map(movie => {
        const dateArray = movie.release_date.split('-');

        return <li key={movie.title}>{movie.title} ({dateArray[0]})</li>;
      })}
    </ul>
  </div>;

const mapStateToProps = ({ character: { movies } }) => ({
  movies,
});

export default connect(mapStateToProps)(CharacterMovies);
