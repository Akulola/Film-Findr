import React from "react"; //note 
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import './App.css';
import MovieList from './components/movieList'

function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={MovieList} /> //should link to 'home' component
        <Route path="" element={} />
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;

