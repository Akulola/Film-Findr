import React, { useState, useEffect} from 'react';

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
                <div key={movie.id}>
                    <h3 className="movie-title" >{movie.title}</h3>
                    <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    />
                    <p>Rating: {movie.vote_average} </p>
                    <p>Release Date:</p>
                    </div>
            ))}
        </div>
    );
};

export default MovieList;