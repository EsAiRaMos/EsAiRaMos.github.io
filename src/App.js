// Import React and necessary components
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components
import Home from './components/Body/Body';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

// Import styling
import './App.scss';

// Define the main app function
function App() {
  // Render the components
  return (
    <div className="App">
      {/* Set up routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

// Export the App component
export default App;
