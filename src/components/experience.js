import React, { useState } from "react";
import { Link } from 'react-router-dom';

import "../styles/global.css";
import IconHolder from "./icon_holder";

const Experience = ({ experience, defaultValue }) => {
  const [showDetails, setShowDetails] = useState(defaultValue);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card">
      <p className="title">{experience.title}</p>

      {experience.company && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconHolder icon={experience.id} />
          <p className="company"> {experience.company}</p>
        </div>
      )}

      <p className="duration">{experience.duration}</p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "5px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button className="beautiful-button" onClick={toggleDetails}>
          {showDetails ? "Collapse" : "Show details"}
        </button>
      </div>

      {showDetails && (
        <div>
          {experience.description && (
            <div>
              <div className="separator">
                <p>Description</p>
              </div>
              <p className="experience_description">{experience.description}</p>
            </div>
          )}
          <div className="separator">
            <p>Missions</p>
          </div>
          <ul>
            {experience.missions.map((mission, index) => (
              <li className="missions" key={index}>
                {mission}
              </li>
            ))}
          </ul>
          <div className="separator">
            <p>Skills</p>
          </div>
          <ul className="skills">{experience.skills.join(" / ")}</ul>

          {experience.links && (
            <div>
              <div className="separator">
                <p>Links</p>
              </div>
              {experience.links && (
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "5px" }}
                >
                  {Object.entries(experience.links).map(
                    ([label, url], index) => (
                      <Link key={index}to={`/blog/${experience.id}`}>
                        <button className="beautiful-button">{label}</button>
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Experience;
