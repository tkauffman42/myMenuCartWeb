import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>MyMenuCart</h3>
                    <p>Simplify your meal planning and ordering with our app.</p>
                </div>                <div className="footer-section">                    <h3>Links</h3>
                    <ul>
                        <li><Link to="/legal">Legal Information</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: admin@mymenucart.com</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} MyMenuCart. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
