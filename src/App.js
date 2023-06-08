import React from "react"; //note 
import { BrowserRouter , Routes, Route } from "react-router-dom";
// import { NavLink, Outlet, } from "react-router-dom";
import {  Link } from "react-router-dom";
import './App.css';
import MovieList from './components/movieList/MovieList'
import MovieDetail from './components/movieDetails/MovieDetails'
import MovieSearch from './components/search/Search'

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>Film Findr</h1>
        <Link to=""/>
      </nav>
    </header>
    <main >
      <Routes>
        <Route path="/" element={MovieList} />  
        <Route path="/movies/:id" element={MovieDetail} />
        <Route path="/movie" element={MovieSearch} />
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;

