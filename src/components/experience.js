import React from 'react';

const Experience = ({ experience }) => {
    return (
        <div>
            <h1>{experience.title}</h1>
            <ul>
                {experience.missions.map((mission, index) => (
                    <li key={index}>{mission}</li>
                ))}
            </ul>

            <h1>Skills</h1>
            <ul>
                {experience.skills.map((skills, index) => (
                    <li key={index}>{skills}</li>
                ))}
            </ul>

        </div>
    );
};

export default Experience;
