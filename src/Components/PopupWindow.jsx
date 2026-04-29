
import React from "react";
import project from "../Components/project/ProjectCard";
import "./ProjectWindow.css";

function PopupWindow({ name, tech, description, role, challenges, onClose }) {
  return (
    <div>
      <div className="Popup-window">
      
        <button className="close-button" onClick={onClose}>close window</button>
        <h2 className="name">{name}</h2>
        <p className="tech"><strong>Tech:</strong> {tech}</p>
        <p className="description"><strong>Description:</strong> {description}</p>
        <p className="role"><strong>Role:</strong> {role}</p>
        <p className="challenges"><strong>Challenges:</strong> {challenges}</p>
      </div>
    </div >
  );
};
export default PopupWindow;