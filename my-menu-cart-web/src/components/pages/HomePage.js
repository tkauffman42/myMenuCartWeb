import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="home-page">
            <div className="hero-section">
                <h1>Welcome to MyMenuCart</h1>
                <p>Your all-in-one meal planning and grocery shopping assistant</p>
                <div className="cta-buttons">
                    <button className="cta-button">Download iOS App</button>                </div>
            </div>

            <div className="app-preview-section">
                <h2>Simplify Your Meal Planning</h2>
                <div className="app-preview">
                    <div className="app-screenshot">
                        <div className="phone-frame">
                            {/* Placeholder for app screenshot */}
                            <div className="screenshot-placeholder">
                                <i className="app-icon">📱</i>
                            </div>
                        </div>
                    </div>
                    <div className="app-description">
                        <p>MyMenuCart connects with your Kroger account to seamlessly plan meals, create shopping lists, and order groceries - all in one place!</p>
                    </div>
                </div>
            </div>

            <div className="features-section">
                <h2>Key Features</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">📖</div>
                        <h3>Recipe Management</h3>
                        <p>Save recipes from the web, scan them with your camera, or create your own</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🍽️</div>
                        <h3>Meal Planning</h3>
                        <p>Create customizable meal options with main dishes and sides</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">⭐</div>
                        <h3>Regularly Ordered Items</h3>
                        <p>Save time by adding your go-to products with just a tap</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🛒</div>
                        <h3>Shopping List</h3>
                        <p>Automatically add ingredients to your Kroger cart for pickup or delivery</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📅</div>
                        <h3>Calendar Integration</h3>
                        <p>Plan your meals by day and add them to a calendar for all to see</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📲</div>
                        <h3>Share & Import</h3>
                        <p>Share recipes and import them directly from your browser</p>
                    </div>
                </div>
            </div>

            <div className="how-it-works-section">
                <h2>How It Works</h2>
                <div className="steps-container">
                    <div className="step">
                        <div className="step-number">1</div>
                        <h3>Connect Your Account</h3>
                        <p>Link MyMenuCart to your Kroger account for a seamless shopping experience</p>
                    </div>
                    <div className="step">
                        <div className="step-number">2</div>
                        <h3>Plan Your Meals</h3>
                        <p>Create, import, or discover recipes and organize them into meals</p>
                    </div>
                    <div className="step">
                        <div className="step-number">3</div>
                        <h3>Generate Shopping List</h3>
                        <p>Automatically compile all needed ingredients into a shopping list</p>
                    </div>
                    <div className="step">
                        <div className="step-number">4</div>
                        <h3>Order or Shop</h3>
                        <p>Choose between pickup, delivery, or in-store shopping with your list</p>
                    </div>
                </div>
            </div>

            <div className="about-section">
                <h2>About MyMenuCart</h2>
                <p>MyMenuCart was designed to solve the everyday challenge of meal planning and grocery shopping. Our app connects with Kroger's systems to provide a seamless experience from recipe selection to grocery delivery. We help you save time, reduce food waste, and make cooking at home easier than ever before.</p>
            </div>
        </div>
    );
}

export default HomePage;
