import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
const App = () => {
  //const [showVideo, setShowVideo] = useState(true);
  return (
    <div>
      {/*showVideo && <VideoOverlay onClose={() => setShowVideo(false)} />*/}
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  );
};

export default App;
