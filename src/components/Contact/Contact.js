import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.scss';

function Contact() {
  return (
    <div className="contact-container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>For inquiries or feedback, please email us at <a href="mailto:contact@example.com">contact@example.com</a> or call us at <a href="tel:123-456-7890">123-456-7890</a>.</p>
        <h2>Address</h2>
        <p>123 Main Street, Suite 456</p>
        <p>Anytown, USA 12345</p>
        <h2>Follow Us</h2>
        <ul className="social-media-links">
          <li>
            <a href="https://www.facebook.com/example">Facebook</a>
          </li>
          <li>
            <a href="https://www.twitter.com/example">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/example">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
