import React, { useState } from 'react';
import "../styles/global.css";

const Experience = ({ experience }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="card" >
            <p className='company'> {experience.company}</p>
            <p className='title'>{experience.title}</p>
            <p className='duration'>{experience.duration}</p>

            <button className="beautiful-button" onClick={toggleDetails}>{showDetails ? 'Collapse' : 'Show description'}</button>

            {showDetails && (
                <div >
                    <ul >
                        {experience.missions.map((mission, index) => (
                            <li className='missions' key={index}>{mission}</li>
                        ))}
                    </ul>

                    <ul className='skills'>
                        {experience.skills.join(" / ")}
                    </ul>


                    {experience.links && (
                        <div>

                            {Object.entries(experience.links).map(([label, url], index) => (
                                <div key={index} style={{ marginStart: '5px' }}>
                                    <a href={url} target="_blank" rel="noopener noreferrer">
                                        <button className="beautiful-button">{label}</button>
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                    </div>

            )}
        </div>
    );
};

export default Experience;
