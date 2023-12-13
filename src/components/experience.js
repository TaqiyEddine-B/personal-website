import React, { useState } from 'react';
import "../styles/global.css";

const Experience = ({ experience }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="card" onClick={toggleDetails}>
            <p className='title'>{experience.title}</p>
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
                </div>
            )}
        </div>
    );
};

export default Experience;
