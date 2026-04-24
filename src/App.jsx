
import React from "react";
import ProjectCard from "./Components/ProjectCard.jsx";
import todoImg from "./assets/todo.png";
import weather from "./assets/weather.png";
import portfolioWebsite from "./assets/portfolio.jpg";

function App() {
  return (
    <div className="app">
      
      <ProjectCard
        name="Todo App"
        screenshot={todoImg}
        github="https://github.com/yourname/todo-app"
        tech="React, CSS, LocalStorage"
        description="A simple task manager built with React."
        functionality="Users can add, delete, and mark tasks as completed."
        learned="React hooks and state management."
        role="project developer"
        challenges="Handling localStorage persistence."
      />

      <ProjectCard
        name="Weather Dashboard"
        screenshot={weather}
        github="https://github.com/yourname/weather-app"
        tech="React, API, CSS"
        description="Weather app using external API."
        functionality="Displays real-time weather for searched cities."
        learned="Fetching API data and async handling."
        role="project developer"
        challenges="Managing API errors and loading states."
      />

      <ProjectCard
        name="Portfolio Website"
        screenshot={portfolioWebsite}
        github="https://github.com/yourname/portfolio"
        tech="React, JavaScript"
        description="Personal portfolio website."
        functionality="Shows projects, skills and contact form."
        learned="Component reuse and responsive design."
        role="project developer"
        challenges="Making layout responsive."
      />

    </div>
  );
}

export default App
