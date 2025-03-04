import React from "react";
import "./videoOverlay.css";
import OverlayVideo from "../assets/videos/Your_paragraph_text.mp4";

function VideoOverlay({ onClose }) {
  return (
    <div className="video-overlay">
      <div className="video-wrapper">
        <video autoPlay muted loop>
          <source src={OverlayVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
}

export default VideoOverlay;
