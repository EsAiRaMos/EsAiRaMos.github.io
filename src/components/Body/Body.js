// Importing the necessary libraries and CSS file
import React from 'react';
import './Body.scss';
import { Link } from 'react-router-dom';
import truth from '../../assets/truth.png';
import menu from '../../assets/Menu.png';
import old from '../../assets/old.png';

// Defining the Body component
function Body() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <Link to="/" className="navbar-brand">Portfolio | Esai Ramos</Link>
        <ul className="navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      {/* Main content */}
      <div className="body-container">
        {/* Hero section */}
        <section className="hero">
          <h1>Welcome to my Website| </h1>
          <p>My Homepage contains descriptions and pictures from past projects.</p>
          <button>Learn More</button>
        </section>

        {/* Features section */}
        <section className="features">
          <div className="feature">
            <h2>Truth Browser</h2>
            <img className="truth-image" src={truth} alt="Truth Browser"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="feature">
            <h2>Text Adventure</h2>
            <img className="menu-image" src={menu} alt="Console Menu"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="feature">
            <h2>E-Commerce</h2>
            <img className="old-image" src={old} alt="old"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </section>

        {/* Testimonial section */}
        <section className="testimonial">
          <p>I'm a Computer Science major, with a passion for UI/UX design, web design, and creative design. I am currently attending the University of Advancing Technology.</p>
          <h3>Esai Ramos</h3>
          <p>Student at University of Advancing Technology</p>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 My Website</p>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </footer>
    </div>
  );
}

// Exporting the Body component as the default export
export default Body;

