import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MovieList from './components/movieList/MovieList'
import MovieDetail from './components/movieDetails/MovieDetails'
import MovieSearch from './components/search/Search'
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
     <Header />
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/movieList" element={<MovieList />} />
        <Route path="/movie" element={<MovieSearch />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
