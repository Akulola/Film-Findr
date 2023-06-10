import React, { useState } from 'react';
import './footer.css'


function Footer() {
    const [info, setInfo] = useState('');

    const handleLinkClick = (text) => {
        setInfo(text);
    };

    return (
        <footer>
            <div className='footer-content'>
             <p>&copy; 2023 Film Findr. All rights reserved.</p> 
                <nav>
                    <ul className="footer-links">
                        <li>
                        <button onClick={() => handleLinkClick('Terms of Service')}>
                            Terms of Service
                        </button>
                        </li>
                        <li>
                        <button onClick={() => handleLinkClick('Privacy Policy')}>
                            Privacy Policy
                        </button> 
                        </li>
                        <li>
                        <button onClick={() => handleLinkClick('Contact Us')}>
                            Contact Us
                        </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;