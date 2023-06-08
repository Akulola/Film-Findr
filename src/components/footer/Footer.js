import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="Footer-container">
      <div className="footerLinks">
        <Link to="/popular-movies">Popular</Link>
        <Link to="/top-rated-movies">Top Rated</Link>
        <Link to="/upcoming-movies">Upcoming</Link>
        <Link to="/about-us">About Us</Link>
      </div>
      <p>© 2023 Film-Findr. All rights reserved.</p>
      <p>
        Made with <span className="heart">&hearts;</span> by Angie Kulola
      </p>
    </footer>
  );
};

export default Footer;



