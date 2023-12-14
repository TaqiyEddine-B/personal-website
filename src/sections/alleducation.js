import React from "react";
import {educations} from "../portfolio";
import Education from '../components/education';
const MyAllEducation = () => {
    return (
        <div >
            <h1>Education</h1>
            {educations.data.map(education => (
                <Education education={education} />
            ))}
        </div>
    );
}
export default MyAllEducation;