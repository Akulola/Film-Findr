import React from "react"; //note 
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import './App.css';
import MovieList from './components/movieList'
import MovieDetail from './components/movieDetails'

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>Film Findr</h1>
        <Link to=""/>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={MovieList} /> //should link to 'home' component
        <Route path="" element={} /> //extra route path 
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;

