import React from "react";
import { work_experiences } from "../portfolio";
import Experience from "../components/experience";

const MyAllExps = () => {
  return (
    <div className="section">
      <p className="section_title">Experiences</p>
      {work_experiences.data.map((experience) => (
        <Experience experience={experience} />
      ))}
    </div>
  );
};
export default MyAllExps;
