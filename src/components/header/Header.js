import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Header() {

  const logoImage = "https://i.pinimg.com/564x/cb/c8/ae/cbc8aede6fda829e2e0eb6887082f90d.jpg";

    return (
        <header className='header'>
          <div className='headerLeft'>
            <Link to="/" className='app-name'>
          <img src={logoImage} alt="Logo" className="logo-image" />
        </Link>
              <h1 className="header-title" style={{ fontFamily: "Raleway, sans-serif", fontSize: "24px", color: "#333" }}>Film-Findr</h1>
            </div>
            <nav className='navbar'>
            <ul className="nav-links">
                <li>
                <Link className='nav-link' to="/">Home</Link>
                </li>
                <li>
                <Link className='nav-link' to="/movie">Movie Search</Link> 
                </li>
            </ul>
            </nav>
             <div className="headerRight">
              <FontAwesomeIcon icon={faTwitter} className="social-icon"/>
              <FontAwesomeIcon icon={faInstagram} className="social-icon"/>
              <FontAwesomeIcon icon={faFacebook} className="social-icon"/>
      </div>
        </header>
    );
};

export default Header; 