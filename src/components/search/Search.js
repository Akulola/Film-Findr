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