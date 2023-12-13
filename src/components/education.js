import React, { useState } from 'react';
import "../styles/global.css";

const Education = ({ education }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="card" onClick={toggleDetails}>
            <p className='title'>{education.title}</p>
            {showDetails && (
                <div>
                    <p >{education.university}</p>

                </div>
            )}
        </div>
    );
};

export default Education;
