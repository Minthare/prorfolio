import React from 'react';
import '../styles/Header.css';


const Header = ({ currentSection, setCurrentSection }) => {
  return (
    <header className="header">
      <div className="navigation">
        <h3>Joshua Pierre</h3>
        <a
          
          className={currentSection === 'About' ? 'active' : ''}
          onClick={() => setCurrentSection('About')}
        >
          About
        </a>
        <a
          className={currentSection === 'Portfolio' ? 'active' : ''}
          onClick={() => setCurrentSection('Portfolio')}
        >
          Portfolio
        </a>
        <a
          className={currentSection === 'Contact' ? 'active' : ''}
          onClick={() => setCurrentSection('Contact')}
        >
          Contact
        </a>
        <a
      
          className={currentSection === 'Resume' ? 'active' : ''}
          onClick={() => setCurrentSection('Resume')}
        >
          Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
