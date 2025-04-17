import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>MyMenuCart</h3>
                    <p>Simplify your meal planning and ordering with our app.</p>
                </div>

                <div className="footer-section">
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: info@mymenucart.com</p>
                    <p>Phone: (555) 123-4567</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} MyMenuCart. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
