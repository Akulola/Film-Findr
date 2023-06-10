import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="logo">
            <Link to="/">Film Findr</Link>
            </div>
        </header>
    )
}