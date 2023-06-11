import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import './movieList.css'

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=2801d62ffaec700bd700b8cdb258437b')
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.log('Error fetching movies', error));
  }, []);

  return (
    <div className="movie-list-container">
      <h2 className="movie-list">Movie List</h2>
      <div className="movie-items">
        {movies.map(movie => (
          <div className="movie-item" key={movie.id}>
            <h3 className="movie-title">{movie.title}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-image"
            />
            <p className="movie-rating">Rating: {movie.vote_average}</p>
            <p className="movie-release-date">Release Date: {movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=2801d62ffaec700bd700b8cdb258437b')
            .then(response => response.json())
            .then((data) => setMovies(data.results))
            .catch((error) => console.log('Error fetching movies', error));
        }, []);
    return (
        <div className='movie-list-container'>
            <h2 className="movie-list" > Movie List</h2>
            <div className='movie-grid'>
                {movies.map((movie) => (
                    <Link to={`/movies/${movie.id}`} key={movie.id} className='movie-item'>
                        <div>
                            <h3 className="movie-title" >{movie.title}</h3>
                            <img 
                            className='movie-image'
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            />
                            <p className='movie-rating'>Rating: {movie.vote_average} </p>
                            <p className='movie-release-date'>Release Date: {movie.release_date}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MovieList;