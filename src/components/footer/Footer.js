import React, { useState } from 'react';
import './footer.css'


function Footer() {
    const [info, setInfo] = useState('');
    return (
        <footer>
            <div className='footer-content'>
             <p>&copy; 2023 Film Findr. All rights reserved.</p> 
                <nav>
                    <ul className="footer-links">
                        <li><a href="/">Terms of Service</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;