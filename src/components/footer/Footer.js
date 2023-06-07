import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About</h3>
                    <p>
                        We are dedicated to providing personalized movie recommendations based on your preferences and interests.
                    </p>
                </div>
                <div className="footer-section">
                    <h3>Links</h3>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/movies">Movies</Link>
                        </li>
                        <li>
                            <Link to="/tv-shows">TV Shows</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Your Movie Recommendations Platform.</p>
            </div>
        </footer>
    );
};

export default Footer;
