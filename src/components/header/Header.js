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
        <div className="headerMiddle">
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
        <div className="headerRight">
          <a href="https://cdn-icons-png.flaticon.com/512/187/187189.png?w=740&t=st=1686218200~exp=1686218800~hmac=a78c17d8c10e95b7894afcbe82b159063b3d787226e04d472146ea93261591ee" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f icon-small"></i>
          </a>
          <a href="https://cdn-icons-png.flaticon.com/512/733/733579.png?w=740&t=st=1686218241~exp=1686218841~hmac=2de5925f239ec9be95746f584d79298a18037a5130732c78c69e581839eabfb8" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter icon-small"></i>
          </a>
          <a href="https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?w=740&t=st=1686218311~exp=1686218911~hmac=2acb172e817aa3a0ecb766a0ddeb7aaf19ee1e2389703643df7416967ceb2443" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram icon-small"></i>
          </a>
        </div> 
      </div>
    </div>
  );
};

export default Header;
