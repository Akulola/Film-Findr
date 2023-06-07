import React from "react"; //note 
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="" element={} />
        <Route path="" element={} />
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;

