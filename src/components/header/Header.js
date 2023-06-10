import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <header>
            <div className="logo">
            <Link to="/">Film Findr</Link>
            </div>
            <nav>
            <ul className="nav-links">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/movie">Movie Search</Link> 
                </li>
            </ul>
            </nav>
        </header>
    );
}

export default Header;