import "../styles/global.css";
import Lottie from "react-lottie";
import animationData from "../animations/current.json";

const CurrentAnim = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: "0px",
      }}
    >
              <Lottie
        options={defaultOptions}
        height={80}
        width={80}
        resizeMode="center"
        style={{ margin: 0 }}
      />
      <p
        style={{
          fontSize: "20px",
          textAlign: "center",
          color: "#fff",
          fontWeight: "bold",
          margin: "0px", // Set margin to 0 to remove the space
        }}
      >
        Available for opportunities
      </p>

    </div>
  );
};

export default CurrentAnim;
