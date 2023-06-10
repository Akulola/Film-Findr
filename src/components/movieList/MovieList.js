import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

const  MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=2801d62ffaec700bd700b8cdb258437b')
            .then(response => response.json())
            .then((data) => setMovies(data.results))
            .catch((error) => console.log('Error fetching movies', error));
        }, []);
    return (
        <div>
            <h2 className="movie-list" > Movie List</h2>
            {movies.map((movie) => (
                <Link to={`/movies/${movie.id}`} key={movie.id}>
                    <div>
                        <h3 className="movie-title" >{movie.title}</h3>
                        <img 
                        className='image-poster'
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        />
                        <p>Rating: {movie.vote_average} </p>
                        <p>Release Date:</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MovieList;