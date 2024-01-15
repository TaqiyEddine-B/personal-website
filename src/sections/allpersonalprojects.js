import React from "react";
import {personal_experiences} from "../portfolio";
import Experience from '../components/experience';

const MyAllPersonalProjects = () => {
    return (
        <div className="section">
            <p className="section_title">Personal Projects</p>
            {personal_experiences.data.map(experience => (
                <Experience experience={experience} />
            ))}
        </div>
    );
}
export default MyAllPersonalProjects;