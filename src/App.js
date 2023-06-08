import React from "react"; //note 
import { BrowserRouter , Routes, Route } from "react-router-dom";
// import { NavLink, Outlet, } from "react-router-dom";
import {  Link } from "react-router-dom";
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
        <Route path="/" element={MovieList} />  
        <Route path="/movies/:id" element={MovieDetail} />
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;


