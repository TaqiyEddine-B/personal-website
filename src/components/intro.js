import React from "react";

const Intro = () => {
    const greenTextStyle = {
        color: '#007b5e',
      };
    return (
        <div>
        <p>  Hello, I'm <strong><span style={greenTextStyle}>Taqiy Eddine BOUKLOUHA</span></strong> </p>
        <p className="job_title"> AI Developer</p>
        <p className="current_location"> Toulouse | France </p>

        <p className="description"> Graduated in AI and software engineering, with enriching experience, my passion lies in the fields of Data Science,AI, and Machine/Deep Learning.<br></br>
        Currently seeking full-time opportunities in these domains. </p>

        <a href="https://www.linkedin.com/in/taqiyeddine-b/" target="_blank" className="beautiful-button" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/taqiyeddine-b" target="_blank" className="beautiful-button" rel="noopener noreferrer">GitHub</a>

        </div>
    );

};

export default Intro;
