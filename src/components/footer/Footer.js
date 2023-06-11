import React, { useState } from 'react';
import './footer.css';

function Footer() {
  const [info, setInfo] = useState('');

  const handleLinkClick = (text) => {
    setInfo(text);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Film Findr. All rights reserved.</p>
        <nav>
          <ul className="footer-links">
            <li>
              <button onClick={() => handleLinkClick('Contact Us Developers')}>
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {info && (
        <div className="info">
          {info.includes('Contact Us Developers') ? (
            <p>
              Contact Us Developers: Angela Mvoi: 
              <a href="https://github.com/Akulola" target="_blank" rel="noopener noreferrer">
                https://github.com/Akulola
              </a>
              , Kenneth Wanguka: 
              <a href="https://github.com/Ken-Kabutu/" target="_blank" rel="noopener noreferrer">
                https://github.com/Ken-Kabutu/
              </a>
              , Ruth Osukuku: 
              <a href="https://github.com/RuthOsukuku" target="_blank" rel="noopener noreferrer">
                https://github.com/RuthOsukuku
              </a>
              , Reagan Munene: 
              <a href="https://github.com/reaganmunene" target="_blank" rel="noopener noreferrer">
                https://github.com/reaganmunene
              </a>
              
              , Mary Mukami: 
              <a href="https://github.com/reaganmunene" target="_blank" rel="noopener noreferrer">
              https://github.com/Camie34
              </a>
              
            </p>
          ) : (
            info
          )}
        </div>
      )}
    </footer>
  );
}

export default Footer;