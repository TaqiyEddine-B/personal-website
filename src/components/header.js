// Header.js
import React from 'react';
import "../styles/global.css";
const Header = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className='header' >
            <nav>
            <button onClick={() => scrollToSection('experiences')} className="vibrant">Experiences</button>
            <button onClick={() => scrollToSection('education')} className="vibrant">Education</button>
            <button onClick={() => scrollToSection('projects')} className="vibrant">Personnel Projects</button>
            <button onClick={() => scrollToSection('publications')} className="vibrant">Publications</button>

            </nav>
        </header>
    );
};

export default Header;