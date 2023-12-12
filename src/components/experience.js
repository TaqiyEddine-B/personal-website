import React from 'react';

const Experience = ({ title, responsibilities, skills }) => {
    return (
        <div>
            <h2>{title}</h2>
            <h3>Responsibilities:</h3>
            <ul>
                {responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ul>
            <h3>Skills:</h3>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;
