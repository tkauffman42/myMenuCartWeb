import React, { useState } from 'react';
import './HomePage.css';

function HomePage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const screenshots = [
        {
            image: '/appScreenshots/recipes.jpg',
            title: 'Recipe Management',
            description: 'Browse and manage your favorite recipes easily'
        },
        {
            image: '/appScreenshots/addIngredients.jpg',
            title: 'Add Ingredients',
            description: 'Quickly add ingredients to your shopping list'
        },
        {
            image: '/appScreenshots/regularorder.jpg',
            title: 'Regular Orders',
            description: 'Access your frequently ordered items'
        },
        {
            image: '/appScreenshots/shoppinglist.jpg',
            title: 'Shopping List',
            description: 'View and manage your shopping list'
        }
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    };

    return (
        <div className="home-page">
            <div className="hero-section">
                <h1>Welcome to MyMenuCart</h1>
                <p>Your all-in-one meal planning and grocery shopping assistant</p>
                <div className="cta-buttons">
                    <button className="cta-button">Coming soon!</button>
                </div>
            </div>

            <div className="app-preview-section">
                <h2>Simplify Your Meal Planning</h2>
                <div className="app-preview">                    <div className="app-screenshot">
                    <button className="gallery-nav prev" onClick={prevImage}>&lt;</button>
                    <div className="phone-frame">
                        <div className="screenshot-container">
                            <img
                                src={screenshots[currentImageIndex].image}
                                alt={screenshots[currentImageIndex].title}
                                className="screenshot-image"
                            />
                        </div>
                    </div>
                    <button className="gallery-nav next" onClick={nextImage}>&gt;</button>
                    <div className="screenshot-dots">
                        {screenshots.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                                onClick={() => setCurrentImageIndex(index)}
                            />
                        ))}
                    </div>
                    <div className="mobile-feature-details">
                        <h3>{screenshots[currentImageIndex].title}</h3>
                        <p>{screenshots[currentImageIndex].description}</p>
                    </div>
                </div>
                    <div className="app-description">
                        <div className="feature-details desktop-feature-details">
                            <h3>{screenshots[currentImageIndex].title}</h3>
                            <p>{screenshots[currentImageIndex].description}</p>
                        </div>
                        <div className="app-summary">
                            <p>MyMenuCart connects with your Kroger account to seamlessly plan meals, create shopping lists, and order groceries - all in one place!</p>
                        </div>
                    </div>
                </div>
            </div>            <div className="features-section">
                <h2>Key Features</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">📖</div>
                        <h3>Recipe Management</h3>
                        <p>Save recipes from the web with our share extension, scan them using your camera, or create your own</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🍽️</div>
                        <h3>Meal Planning</h3>
                        <p>Create customizable meals with main dishes and sides that sync with your shopping list</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">⭐</div>
                        <h3>My Favorites</h3>
                        <p>Save time by adding your regularly purchased items to your lists with just a tap</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🛒</div>
                        <h3>Kroger Integration</h3>
                        <p>Search Kroger products, add ingredients to your cart, and organize pickup or delivery</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📝</div>
                        <h3>Reminders Integration</h3>
                        <p>Export your shopping list to iOS Reminders for convenient in-store shopping</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📱</div>
                        <h3>Share & Discover</h3>
                        <p>Share recipes with friends and discover new meals from other users</p>
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
                        <p>Create, import, or discover recipes</p>
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
