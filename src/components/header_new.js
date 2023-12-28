import React, { useState, useEffect } from "react";
import ButtonWithBorderRadius from "../components/button";

const ButtonContainer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        padding: "20px",
        background: "#282c34",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ButtonWithBorderRadius
        borderRadius={isMobile ? "state3" : "state1"}
        section={"experiences"}
      >
        Experiences
      </ButtonWithBorderRadius>
      <ButtonWithBorderRadius
        borderRadius={isMobile ? "state3" : "state4"}
        section={"education"}
      >
        Education
      </ButtonWithBorderRadius>
      <ButtonWithBorderRadius
        borderRadius={isMobile ? "state3" : "state4"}
        section={"education"}
      >
        Personnel Projects
      </ButtonWithBorderRadius>
      <ButtonWithBorderRadius
        borderRadius={isMobile ? "state3" : "state2"}
        section={"publications"}
      >
        Publications
      </ButtonWithBorderRadius>
    </div>
  );
};

export default ButtonContainer;
