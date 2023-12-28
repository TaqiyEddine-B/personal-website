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
            <button onClick={() => scrollToSection('experiences')} className="vibrant_start">Experiences</button>
            <button onClick={() => scrollToSection('education')} className="vibrant_center">Education</button>
            <button onClick={() => scrollToSection('projects')} className="vibrant_center">Personnel Projects</button>
            <button onClick={() => scrollToSection('education')} className="vibrant_end">Publications</button>

            </nav>
        </header>
    );
};

export default Header;