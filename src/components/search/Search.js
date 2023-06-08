import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function MovieSearch() {
    const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2801d62ffaec700bd700b8cdb258437b&query=${searchQuery}`);
      if (response.ok) {
         const data = await response.json
        // Process the API response data as needed
        // Redirect to movie list view passing the search query as a parameter
           navigate(`/movie?search=${searchQuery}`);
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
          placeholder="Search movies by title or genre"
        />
       <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default MovieSearch;

import React, { useState } from 'react';


