import React from "react";
import {work_experiences} from "../portfolio";
import Experience from '../components/experience';

const MyAllExps = () => {
    return (
        <div>
            <h1>Experiences</h1>
            {work_experiences.data.map(experience => (
                <Experience experience={experience} />
            ))}
        </div>
    );
}
export default MyAllExps;