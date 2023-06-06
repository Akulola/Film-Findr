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
                const response = await fetch(`/api/movies/${id}`);
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
      <img src={movie.image} alt={movie.title} />
      
    </div>
  );
}

export default MovieDetail;
