import React from 'react';
import { Link } from 'react-router-dom';
import './About.scss';
import face from '../../Assets/face.png';

function About() {
  return (
    <div className="about-container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className="about-content">
        <img className="feature-image" src={face} alt="Profile" />
        <div className="about-text">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet metus massa. Nulla facilisi. Sed quis velit eget dolor feugiat malesuada. Fusce iaculis arcu a mi pellentesque, a pellentesque sapien interdum. Sed sodales suscipit nisi, sit amet euismod risus iaculis eu. Aenean at hendrerit orci. Nullam vel neque ac ex iaculis facilisis. Etiam eget enim et felis dictum rhoncus at quis nulla. Integer vestibulum interdum elit, non rhoncus elit suscipit et.</p>
          <p>Donec vel tristique lectus. Vivamus interdum sem non tortor varius dapibus. Nulla viverra elit dolor, quis hendrerit libero placerat ac. Praesent varius nisl arcu, nec fermentum velit pharetra vel. Aliquam et nisi aliquet, laoreet mauris in, euismod quam. Maecenas eleifend magna ut justo facilisis consectetur. Nulla id dolor sit amet metus blandit laoreet in ut est. Fusce vel feugiat mi. Fusce vel lacus vel massa ullamcorper blandit ut at mauris. Sed at sem eget lorem auctor laoreet non ut lorem. Donec non nibh ut sapien malesuada facilisis. Aenean eget arcu nec turpis ultrices vestibulum. Nunc ut dictum elit. Nullam vel gravida purus.</p>
          <h2>Education</h2>
          <ul>
            <li>Bachelor's Degree in Computer Science, XYZ University, 2010-2014</li>
            <li>Master's Degree in Software Engineering, ABC University, 2014-2016</li>
          </ul>
          <h2>Experience</h2>
          <ul>
            <li>Software Engineer, XYZ Company, 2016-present</li>
            <li>Web Developer, ABC Agency, 2014-2016</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
