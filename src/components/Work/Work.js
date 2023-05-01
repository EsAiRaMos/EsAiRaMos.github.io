import React from 'react';
import { Link } from 'react-router-dom';
import './Work.scss';
import pongGif from '../../Assets/pong.gif';

function Work() {
  return (
    <div className="work-container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
        </ul>
      </nav>
      <div className="work-content">
        <h1>My Work |</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet metus massa. Nulla facilisi. Sed quis velit eget dolor feugiat malesuada. Fusce iaculis arcu a mi pellentesque, a pellentesque sapien interdum. Sed sodales suscipit nisi, sit amet euismod risus iaculis eu. Aenean at hendrerit orci. Nullam vel neque ac ex iaculis facilisis. Etiam eget enim et felis dictum rhoncus at quis nulla. Integer vestibulum interdum elit, non rhoncus elit suscipit et.</p>
        <p>Donec vel tristique lectus. Vivamus interdum sem non tortor varius dapibus. Nulla viverra elit dolor, quis hendrerit libero placerat ac. Praesent varius nisl arcu, nec fermentum velit pharetra vel. Aliquam et nisi aliquet, laoreet mauris in, euismod quam. Maecenas eleifend magna ut justo facilisis consectetur. Nulla id dolor sit amet metus blandit laoreet in ut est. Fusce vel feugiat mi. Fusce vel lacus vel massa ullamcorper blandit ut at mauris. Sed at sem eget lorem auctor laoreet non ut lorem. Donec non nibh ut sapien malesuada facilisis. Aenean eget arcu nec turpis ultrices vestibulum. Nunc ut dictum elit. Nullam vel gravida purus.</p>
        <h2>Projects</h2>
        <ul>
          <li>Project A, XYZ Company, 2018-present</li>
          <li>
            <img src={pongGif} alt="pong game gif" />
          </li>
          <li>Project B, ABC Agency, 2016-2018</li>
        </ul>
        <h2>Clients</h2>
        <ul>
          <li>Client A, XYZ Company</li>
          <li>Client B, ABC Agency</li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
