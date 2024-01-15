import React, { useState } from "react";
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

      <p className="duration">{experience.duration}</p>

      <div style={
        {
          display: "flex",
          flexDirection: "row",
          gap: "5px",
          justifyContent: "center",
          alignItems: "center",
        }
      }>
      <button className="beautiful-button" onClick={toggleDetails}>
        {showDetails ? "Collapse" : "Show description"}
      </button>
      </div>


      {showDetails && (
        <div>
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
                      <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="beautiful-button">{label}</button>
                      </a>
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
