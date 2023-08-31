import React from 'react';
import './Home.scss'; //imports the scss styles
import myImage from '../../Assets/images/optimized_IMG_9428.svg';

function Home() {
    return (
        <div className='website-container'>

            
            <section className='nav-container'>
                <nav>
                    <header>
                        <h2>WELCOME |</h2>
                    </header>
                    <main>
                        <h3>Home |</h3>
                        <h3>About Me |</h3>
                        <h3>Skills |</h3>
                        <h3>Projects |</h3>
                        <h3>Contacts |</h3>
                    </main>
                </nav>
            </section>

            <section className='main-container'>
                <header>
                    <h1>My name is Esai C. Ramos. I'm a UI/UX Designer.</h1>
                    <p>This is my personal website showcasing my various projects.</p>
                </header>
                <main>
                    <section>
                        <h2>About Me</h2>
                        <p>Currently enrolled in University of Advancing Technology. I'm majoring in Advancing Computer Science.</p>
                    </section>
                    <section>
                        <h2>Projects</h2>
                        <p>Here are some of my projects below.</p>
                    </section>
                </main>

                <footer>
                    <p>&copy; 2023 My website. All rights reserved.</p>
                </footer>
            </section>

            <section className='esai-container'>
            <caption>
                <img src={myImage} alt="Esai Ramos" />
                    <h2>Esai Ramos<br />Email | esaicr20@gmail.com<br/>Computer Science Major</h2>
                </caption>
            </section>

        </div>
    );
}

export default Home;
