// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MovieSearch from './components/MovieSearch';
function Home() {
  return <h1>Home</h1>;
}
function About() {
  return <h1>About</h1>;
}
function App() {
  return (
    <Router>
       <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}