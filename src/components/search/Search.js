import React, { useState } from 'react';
import './movieSearch.css';

function MovieSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const apiKey = '2801d62ffaec700bd700b8cdb258437b';

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
              );
              if (response.ok) {
                const data = await response.json();
                setSearchResults(data.results);
            } else {
                console.error('Error occurred while fetching movies');
              }
            } catch (error) {
                console.error('Error occurred while fetching movies', error);
              }
            };

            return (
                <div>
                  <form onSubmit={handleSearch}>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search movies..."
                    />
                    <button type="submit">Search</button>
                  </form>

                  {searchResults.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <ul>
            {searchResults.map((movie) => (
              <li key={movie.id}>
                <h3>{movie.title}</h3>
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />

                  )}
                  <p>Release Date: {movie.release_date}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }