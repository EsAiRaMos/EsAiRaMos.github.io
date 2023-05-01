import React from 'react';
import './Body.scss';
import { Link } from 'react-router-dom';
import old from '../../Assets/old.png';
import truth from '../../Assets/truth.png';
import menu from '../../Assets/menu.png';

function Body() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">Portfolio | Esai Ramos</Link>
        <ul className="navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="body-container">
        <section className="hero">
          <h1>Welcome to my Website| </h1>
          <p>My Homepage contains descriptions and pictures from past projects.</p>
          <button>Learn More</button>
        </section>
        
        <section className="features">
          <div className="feature">
            <h2>Truth Browser</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <img src={truth} alt="Truth Browser" className="feature-image" />
          </div>
          <div className="feature">
            <h2>Text Adventure</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <img src={old} alt="Text Adventure" className="feature-image" />
          </div>
          <div className="feature">
            <h2>E-Commerce</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <img src={menu} alt="E-Commerce" className="feature-image" />
          </div>
        </section>
        
        <section className="testimonial">
          <p>I'm a Computer Science major, with a passion for UI/UX design, web design, and creative design. I am currently attending the University of Advancing Technology.</p>
          <h3>Esai Ramos</h3>
          <p>Student at University of Advancing Technology</p>
        </section>
      </div>
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

export default Body;
