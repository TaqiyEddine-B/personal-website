import React from "react";
import {education} from "../portfolio";

const MyAllEducation = () => {
    return (
        <div>
            <h1>Education</h1>
            {education.data.map(education => (
                <div key={education.title}>
                    <p>{education.title}</p>
                    <p>{education.university}</p>
                </div>
            ))}
        </div>
    );
}
export default MyAllEducation;