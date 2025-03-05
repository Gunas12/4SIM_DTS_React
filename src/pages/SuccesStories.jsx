import React from "react";
import Success from "../assets/videos/success.mp4";
function SuccesStories() {
  return (
    <div className="video-home">
      <video autoPlay muted loop>
        <source src={Success} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default SuccesStories;
