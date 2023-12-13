import React from "react";
import {work_experiences} from "../portfolio";
import Experience from './experience';

const MyAllPersonalProjects = () => {
    return (
        <div>
            <h1>Personal Projects</h1>
            {work_experiences.data.map(experience => (
                <Experience experience={experience} />
            ))}
        </div>
    );
}
export default MyAllExps;