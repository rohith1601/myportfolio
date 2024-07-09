import React from 'react'
import "./Projects.css"

const Projects = () => {
  return (
    <div id='projects' className="projects">
      <div className="sub-title"><h1>Projects</h1></div>
      <div className="projects-list">
        <div className="project">
          <i className="fa-solid fa-book"></i>
          <h2>Portfolio</h2>
          <p>Used HTML, CSS and JS  and developed a simple portfolio website</p>
          <a href="https://github.com/bhumpallipavan/my-portfolio" target="_blank">VIEW CODE</a>
        </div>
        <div className="project">
          <i className="fa-solid fa-book"></i>
          <h2>Portfolio</h2>
          <p>Used HTML, CSS and JS  and developed a simple portfolio website</p>
          <a href="#">VIEW LIVE</a> <br />
          <a href="#">VIEW CODE</a>
        </div>
      </div>
    </div>
  );
}

export default Projects
