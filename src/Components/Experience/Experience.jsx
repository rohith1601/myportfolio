import React, { useState } from 'react';
import './Experience.css';

import htmlIcon from '../../images/html.png';
import cssIcon from '../../images/css.png';
import reactIcon from '../../images/react.png';
import nodeIcon from '../../images/node.png';
import mongoIcon from '../../images/mongodb.png';
import ksLogo from "../../images/ks.jpeg"

const Experience = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className="container">
      <div className="tabs">
        <div
          className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => handleTabClick('skills')}
        >
          <h1>Skills</h1>
        </div>
        <div
          className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => handleTabClick('experience')}
        >
          <h1>Experience</h1>
        </div>
      </div>
      <div className="content">
        {activeTab === 'skills' && (
          <div className="skills">
            <ul>
              <li>
                <img src={htmlIcon} alt="HTML"/> 
                <p className='label'>HTML</p>
                </li>
              <li><img src={cssIcon} alt="CSS" /> <p>CSS</p></li>
              <li><img src={reactIcon} alt="React" /> <p>React</p></li>
              <li><img src={nodeIcon} alt="Node.js" /> <p>Node.js</p></li>
              <li><img src={mongoIcon} alt="MongoDB" /><p>MongoDB</p> </li>
            </ul>
          </div>
        )}
        {activeTab === 'experience' && (
          <div className="experience">
            <div className="projects-list">
              <div className="project">
                <img src={ksLogo} alt="ks" />
                <div className="info">
                  <h2>KesavSoft</h2>
                  <p><span>INTERN</span>: SOFTWARE DEVELOPER</p>
                  <p><span>PROJECT</span>: Laundry</p>
                  <p><span>DURATION</span>: 6 Weeks</p>
                  <p><span>TECHNOLOGIES</span>: HTML, CSS, NODEJS</p>
                  <p><span>DESCRIPTION</span>: Developed Maguva, a Cloth Store web application to manage client's business. The application was developed using the HTML, CSS, BootStrap, Express JS, Node JS and Flat JSON files.</p>
                  <a href="https://github.com/keshavsoft/Laundry" target="_blank" rel="noopener noreferrer">VIEW CODE</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
