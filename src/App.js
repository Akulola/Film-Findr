import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/movieList/MovieList'
import MovieDetail from './components/movieDetails/MovieDetails'
import MovieSearch from './components/search/Search'

function App() {
  return (
    <Router>
     <Header />

      
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/movie" element={<MovieSearch />} />
        </Routes>

      <Footer />
    </Router>
  );
}

export default App;