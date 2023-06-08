import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail() {

    const { id } = useParams(); //movie id from URL

    const [movie, setMovie] = useState(null); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //fetch movie detail from API
        const fetchMovieDetail = async () => {
            try {
                const apikey = '2801d62ffaec700bd700b8cdb258437b'; // API key
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2801d62ffaec700bd700b8cdb258437b`);
                const data = await response.json();
                setMovie(data);
                setLoading(false);
            } catch (error) {
                console.log('Error fetching movie detail:', error);
                setLoading(false);
            }
        };

        fetchMovieDetail();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!movie) {
        return <div>Film not found.</div>;
    }


  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>Genre: {movie.genres.map(genre => genre.name).join(', ')}</p>
      <p>Rating: {movie.vote_average}</p>
      <p>Synopsis: {movie.overview}</p>
      <p>Cast: {movie.credits.cast.map(actor => actor.name).join(', ')}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Duration: {movie.runtime} minutes</p>
      <h3>User Reviews</h3>
      <ul>
      {movie.reviews.results.map(review => (
        <li key={review.id}>
            <p>Rating: {review.author}</p>
            <p>Comment: {review.content}</p>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetail;
