import React from "react";
import {personal_experiences} from "../portfolio";
import Experience from '../components/experience';

const MyAllPersonalProjects = () => {
    return (
        <div>
            <h1>Personal Projects</h1>
            {personal_experiences.data.map(experience => (
                <Experience experience={experience} />
            ))}
        </div>
    );
}
export default MyAllPersonalProjects;