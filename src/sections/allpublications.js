import React from "react";
import {publications} from "../portfolio";
import Experience from '../components/experience';

const SectionPublications = () => {
    return (
        <div>
            <h1>Publications</h1>
            {publications.data.map(experience => (
                <Experience experience={experience} />
            ))}
        </div>
    );
}
export default SectionPublications;