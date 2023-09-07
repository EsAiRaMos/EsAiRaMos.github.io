import React, { useState } from 'react';
import './Home.scss'; // imports the SCSS styles
import myImage from '../../Assets/images/optimized-svg.svg';

const navigationItems = [
  { label: 'Home', content: 'Welcome to my homepage.' },
  { label: 'About Me', content: 'Currently enrolled in University of Advancing Technology. I\'m majoring in Advancing Computer Science.' },
  { label: 'Skills', content: 'Here are some of my skills.' },
  { label: 'Projects', content: 'Here are some of my projects below.' },
  { label: 'Contacts', content: 'Contact me at example@email.com.' },
];

function Home() {
  const [content, setContent] = useState(''); // State to track the content

  const handleNavItemHover = (newContent) => {
    setContent(newContent); // Update the content when hovering over nav items
  };

  return (
    <div className='website-container'>
      <section className='nav-container'>
        <nav>
          <main>
            {navigationItems.map((item, index) => (
              <h3
                key={index}
                onMouseEnter={() => handleNavItemHover(item.label)}
              >
                {item.label}
              </h3>
            ))}
          </main>
        </nav>
      </section>

      <section className='main-container'>
        <header>
          <h1>My name is Esai C. Ramos. I'm a UI/UX Designer.</h1>
          <p>This is my personal website showcasing my various projects.</p>
        </header>
        <main>
          {navigationItems.map((item, index) => (
            content === item.label && (
              <section key={index}>
                <h2>{item.label}</h2>
                <p>{item.content}</p>
              </section>
            )
          ))}
        </main>

        <footer>
          <p>&copy; 2023 My website. All rights reserved.</p>
        </footer>
      </section>

      <section className='esai-container'>
        <img src={myImage} alt='Esai Ramos' />
      </section>
    </div>
  );
}

export default Home;

