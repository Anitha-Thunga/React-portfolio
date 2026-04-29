import { useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import "./Portfolio.css";

import Popup from "../pages/Popup.jsx";


function Portfolio() {
  
  return (
    <div>
      <h2>My projects</h2>
      <Popup/>
    </div>
  );
}

export default Portfolio;