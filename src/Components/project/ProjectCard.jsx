// ProjectCard.jsx
import React from "react";
import "./Project.css";

function ProjectCard(props){

  return (
    <div className="project-card">
      <h2>{props.name}</h2>

      <img src={props.screenshot} alt={props.name} className="project-image" />

      <p><strong>GitHub:</strong> 
        <a href={props.github} target="_blank" rel="noopener noreferrer" className="project-github">
          View Repo
        </a>
      </p>

      <p><strong>Tech Used:</strong> {props.tech}</p>

      <p><strong>About:</strong> {props.description}</p>

      <p><strong>What it does:</strong> {props.functionality}</p>

      <p><strong>What I learned:</strong> {props.learned}</p>

      <p><strong>My Role:</strong> {props.role}</p>

      <p><strong>Challenges:</strong> {props.challenges}</p>
    </div>
  );
};

export default ProjectCard;