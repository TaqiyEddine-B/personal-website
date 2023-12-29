import React, { useState} from "react";

const Intro = () => {
    const greenTextStyle = {
        color: '#007b5e',
        fontSize: '20px',
    };
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    return (
        <div>
        <p className="intro" style={{fontSize:isMobile ? '20px' :'24px'}}>   Hello, I'm <strong><span style={greenTextStyle}>Taqiy Eddine BOUKLOUHA</span></strong> </p>
        <p className="intro" style={{fontSize:isMobile ? '18px' :'22px'}}> Artificial Intelligence Developer</p>
        <p className="intro" style={{fontSize:isMobile ? '18px' :'22px'}}> Toulouse | France </p>

        <p className="intro" style={{fontSize:isMobile ? '18px' :'24px'}}> Graduated in AI and software engineering, with enriching experience, my passion lies in the fields of Data Science,AI, and Machine/Deep Learning.<br></br>
        Currently seeking full-time opportunities in these domains. </p>

        <a href="https://www.linkedin.com/in/taqiyeddine-b/" target="_blank" className="beautiful-button" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/taqiyeddine-b" target="_blank" className="beautiful-button" rel="noopener noreferrer">GitHub</a>

        <hr className="divider"></hr>
        </div>
    );

};

export default Intro;
