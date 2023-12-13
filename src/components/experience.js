import React from 'react';
import "../styles/global.css";

const Experience = ({ experience }) => {
    return (
        <div className="card">
            <p className='title'>{experience.title}</p>
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
    );
};

export default Experience;
