import React from "react";
import { publications } from "../portfolio";
import Experience from "../components/experience";

const SectionPublications = () => {
  return (
    <div className="section">
      <p className="section_title">Publications</p>
      {publications.data.map((experience) => (
        <Experience experience={experience} />
      ))}
    </div>
  );
};
export default SectionPublications;
