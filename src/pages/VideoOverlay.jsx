import React from "react";
import "./videoOverlay.css";
import OverlayVideo from "../assets/videos/overlay_video.mp4";

function VideoOverlay() {
  return (
    <div className="video-home">
      <video autoPlay muted loop>
        <source src={OverlayVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoOverlay;
