import React, { useState } from 'react';
import './movieSearch.css';

function MovieSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const apiKey = '2801d62ffaec700bd700b8cdb258437b';

    const handleSearch = async (e) => {
        e.preventDefault();
        try {