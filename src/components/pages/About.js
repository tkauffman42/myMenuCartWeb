import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-section">
          <div className="about-content">
            <h2>Hello, I'm Troy!</h2>
            <p>
              Welcome to MyMenuCart! If you are here, I want to say thank you. I am sure there are a lot of other options out there. 
              I hope you find this app as useful and enjoyable as I do.
            </p>
            
            <p>
              This journey began a long time ago when my beautiful wife and I were constantly struggling with coming up with a grocery list with our two children running around.
              We would spend over an hour planning, searching, checking the pantry, and then finally placing an order, only to miss something or not get to a meal quickly enough and the groceries would expire. 
              My wife constantly mentioned how much she disliked
              everything about the process. I knew there had to be a better way. 
            </p>
            
            <h3>My Vision</h3>
            <p>
              I believe meal planning should be simple, efficient, and even fun. MyMenuCart helps 
              you organize recipes, create shopping lists automatically, and save time and money 
              on groceries. My goal is to help you spend less time planning and shopping, and more 
              time enjoying meals with the people you love.
            </p>
            
            <h3>Thank You to My Testers</h3>
            <p>
              I want to say thank you to everyone who used early versions of MyMenuCart and provided feedback. 
              Your willingness to work through bugs and share your thoughts on how to make the app better 
              was incredibly helpful. None of this would be possible without your help.
            </p>
            <h3>Thank you Mom</h3>
            <p>
              The biggest thank you goes to my mom.  She has been beside me through this entire process. She was the first
                person to test the app and provide feedback. She believed in the vision and helped me push through the days that I thought it wasn't worth it.
                She's been the one who I could always talk tech to, bounce ideas, send countless screenshots and screen recording late at night and she would always respond. 
                
                She has been an inspiration to me, that you can really do anything you set your mind to.
            </p>
          </div>
        </div>
        
        <div className="app-features">
          <h2>About MyMenuCart</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Recipe Management</h3>
              <p>Easily store and organize all your favorite recipes in one place.</p>
            </div>
            <div className="feature">
              <h3>Automatic Shopping Lists</h3>
              <p>Generate shopping lists automatically based on your meal plan.</p>
            </div>
            <div className="feature">
              <h3>Ingredient Tracking</h3>
              <p>Keep track of ingredients you already have to avoid buying duplicates.</p>
            </div>
            <div className="feature">
              <h3>Easy Meal Planning</h3>
              <p>Plan your meals for days or weeks ahead with a simple, intuitive interface.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;