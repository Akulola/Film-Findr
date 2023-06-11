import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

function MovieDetail() {

    const { id } = useParams(); //movie id from URL
    const [movie, setMovie] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        //fetch movie detail from API
        const fetchMovieDetail = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2801d62ffaec700bd700b8cdb258437b&append_to_response=reviews`);
                const data = await response.json();
                setMovie(data);
                setReviews(data.reviews.results);
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
    <div className="movie-detail-container">
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h3>Genre:</h3>
      <p>{movie.genres && movie.genres.map(genre => genre.name).join(', ')}</p>
      <h3>Rating:</h3>
      <p>{movie.vote_average}</p>
      <h3>Synopsis:</h3>
      <p>{movie.overview}</p>
      {movie.credits && (
        <div>
          <h3>Movie Credits:</h3>
          <p>{movie.credits.cast.map(actor => actor.name).join(', ')}</p>
        </div>
      )}
      <h3>Release Date:</h3>
      <p>{movie.release_date}</p>
      <h3>Duration:</h3>
      <p>{movie.runtime} minutes</p>
      {reviews.length > 0 && (
        <div>
          <h3>User Reviews</h3>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                 <h4>Rating: {review.author}</h4>
                <p>Comment: {review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
