import { useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import "./Portfolio.css";
import Popup from "../pages/Popup.jsx";//importing project popup component
import React from "react";
import '../assets/todo.png';

const Portfolio = () => {
  const [preview, setPreview] = useState(false);//state to control the preview of projects
  const [previewBtn, setPreviewBtn] = useState("show projects");//state to control the the button text
  const [search, setSearch] = useState("");//state to control the search input
  const [popup, setPopup] = useState(false);//state to control the popup visibility
  const [popupData, setPopupData] = useState({});//state to control the popup data
  {/*project data*/ }
  const projects = [
    {
      name: "Todo App",
      screenshot: "../assets/todo.png",
      repo: "https://github.com/yourname/todo-app",
      tech: "React, CSS",
      description: "Task manager app",
      functionality: "Add, delete, complete tasks",
      learned: "useState and localStorage",
      role: "Developer",
      challenges: "State persistence",
    },
    {
      name: "Weather App",
      screenshot: "../assets/weather.png",
      repo: "https://github.com/yourname/weather-app",
      tech: "React, API",
      description: "Weather dashboard",
      functionality: "Shows live weather",
      learned: "API fetching",
      role: "Developer",
      challenges: "Handling API errors",
    }
  ];

  {/*  //function to toggle the preview of projects
  //change the button text accordingly*/}
  const changePreview = () => {
    setPreview(!preview);
    if (!preview) {
      setPreviewBtn("Hide Pojects");
    } else {
      setPreviewBtn("show projects");
    }
  };
  {/*//function to open the project popup
  //this function would likely set the state to show the popup with project details*/}
  const showPopup = (index) => {
    setPopup(true);
    setPopupData({
      name: projects[index].name,
      screenshot: projects[index].screenshot,
      repo: projects[index].repo,
      tech: projects[index].tech,
      description: projects[index].description,
      functionality: projects[index].functionality,
      learned: projects[index].learned,
      role: projects[index].role,
      challenges: projects[index].challenges
    });
  };

  return (
    <div>
      <h1 className="text-3 font-bold text-center">My projects</h1>
      <p className="text-lg text-center mt-4">Here are some of my  projects that I have worked on. Each project shows my skills in web development,design and problem solving</p>
      <div className="flex justify-center mt-6">
        {/*  //button to toggle the preview of projects*/}
        <button onClick={changePreview} className="px-6 py-2 font-semibold rounded-lg shadow-md hover:bg.blue-600 focus:out">
          {previewBtn}
        </button>
      </div>
      {/*  //if preview is true show the input*/}
      {preview && (
        <div className="flex justify-center">
          <input
            type="text"
            className="border border-gray-300 rounded-lg"
            placeholder="search tag" value={search}
            onChange={(e) => setSearch(e.target.value)} />
        </div>
      )}
      {/*//if preview is true show the projects
      //filter projects based on the search input and map over to create cards*/}
      {preview && (
        <div className="flex justify-center">
          {projects
            .filter((project) => project.name.toLowerCase().includes(search.toLowerCase()))
            .map((project) => (
              <ProjectCard
                key={project.id || project.name}
                name={project.name}
                screenshot={project.screenshot}
                repo={project.description}
                tech={project.tech}
                description={project.description}
                functionality={project.functionality}
                learned={project.learned}
                role={project.role}
                challenges={project.challenges}
                onClick={() => showPopup(project)}
              />
            ))}
        </div>
      )}
      {/*//If popup is true show the project popup*/}
      {popup && (
        <ProjectPopup
          name={project.name}
          tech={project.tech}
          description={project.description}
          role={project.role}
          challenges={project.challenges}
          onClick={() => closePopup} />
      )}

      <Popup />
    </div>
  );
}

export default Portfolio;