import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Footer = () => {
  return (
    <footer className="Footer-container">
      <div className="footerLinks">
        <Link to="/popular-movies" className="footerLink">Popular</Link>
        <Link to="/top-rated-movies" className="footerLink">Top Rated</Link>
        <Link to="/upcoming-movies" className="footerLink">Upcoming</Link>
        <Link to="/about-us" className="footerLink">About Us</Link>
      </div>
      <p>© 2023 Film-Findr. All rights reserved.</p>
      <p>
        Made with <span className="heart">&hearts;</span> by Angie Kulola
      </p>
    </footer>
  );
};

export default Footer;


