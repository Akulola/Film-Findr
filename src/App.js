import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MovieList from './MovieList';
import MovieDetails from './MovieDetail'

function App() {
  return (
    <Router>
    <div className="App">
      <Header text="Film-Findr" />

      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetails} />
      </Switch>

      <Footer />
    </div>
    </Router>
  );
};

export default App;
