import React, { useState } from 'react';
import "../styles/global.css";

const Experience = ({ experience }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="card" >
            <p> {experience.company}</p>
            <p className='title'>{experience.title}</p>
            <p className='duration'>{experience.duration}</p>
            <button className="beautiful-button" onClick={toggleDetails}>{showDetails ? 'Collapse' : 'Show description'}</button>
            {showDetails && (
                <div>
                    <hr className="divider" />
                    <ul>
                        {experience.missions.map((mission, index) => (
                            <li key={index}>{mission}</li>
                        ))}
                    </ul>
                    <hr className="divider" />
                    <ul className='skills'>
                        {experience.skills.join(" / ")}
                    </ul>


                    {experience.links && (
                        <div>
                             <hr className="divider" />

                            {Object.entries(experience.links).map(([label, url], index) => (
                                <div key={index} style={{ marginStart: '10px' }}>
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
