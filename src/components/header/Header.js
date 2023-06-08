import React from "react";
import { Link } from "react-router-dom";
import 'fontsource-raleway';

const Header = () => {
  return (
    <div className="App-header">
      <div className="headerContainer">
        <div className="headerLeft">
          <Link to="/">
            <img
              className="header_icon"
              src="https://i.pinimg.com/564x/cb/c8/ae/cbc8aede6fda829e2e0eb6887082f90d.jpg"
              alt="Logo"
            />
          </Link>
          <h1 className="header-title" style={{ fontFamily: "Raleway, sans-serif", fontSize: "24px", color: "#0000FF" }}>
            Film-Findr
          </h1>
        </div>
        <div className="headerRight">
          <Link to="/popular-movies" style={{ fontFamily: "sans-serif" }}>
            Popular
          </Link>
          <Link to="/top-rated-movies" style={{ fontFamily: "sans-serif" }}>
            Top Rated
          </Link>
          <Link to="/upcoming-movies" style={{ fontFamily: "sans-serif" }}>
            Upcoming
          </Link>
          <Link to="/about-us" style={{ fontFamily: "sans-serif" }}>
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
