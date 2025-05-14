import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="main-navigation">
            <div className="nav-container">                <div className="nav-logo">
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/myMenuCartIcon.png`} alt="MyMenuCart Logo" />
                    <span>MyMenuCart</span>
                </Link>
            </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
