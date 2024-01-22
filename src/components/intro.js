import React, { useState } from "react";
import IconHolder from "./icon_holder";
import "../styles/global.css";
import CurrentAnim from "../components/current_anim";

const Intro = () => {
  const [isMobile] = useState(window.innerWidth <= 768);

  return (
    <div>
      <p className="intro" style={{ fontSize: isMobile ? "20px" : "24px" }}>
        {" "}
        Hello, I'm{" "}
        <strong>
          <span className="greenTextStyle">Taqiy Eddine BOUKLOUHA</span>
        </strong>{" "}
      </p>
      <p className="intro" style={{ fontSize: isMobile ? "18px" : "22px" }}>
        {" "}
        Artificial Intelligence Developer
      </p>
      <p className="intro" style={{ fontSize: isMobile ? "18px" : "22px" }}>
        {" "}
        Toulouse | France{" "}
      </p>

      <p className="intro" style={{ fontSize: isMobile ? "17px" : "24px" }}>
        {" "}
        Graduated in AI and software engineering, with enriching experience, my
        passion lies in the fields of Data Science, AI, and Machine/Deep
        Learning.
        <br></br>
      </p>

      <CurrentAnim />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: "0px",
        }}
      >
        <IconHolder icon="linkedin" />

        <IconHolder icon="github" />
      </div>

      <hr className="divider"></hr>
    </div>
  );
};

export default Intro;
