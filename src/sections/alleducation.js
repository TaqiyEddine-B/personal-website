import React from "react";
import {educations} from "../portfolio";
import Education from '../components/education';
const MyAllEducation = () => {
    return (
        <div >
            <p className="section_title">Education</p>
            {educations.data.map(education => (
                <Education education={education} />
            ))}
        </div>
    );
}
export default MyAllEducation;