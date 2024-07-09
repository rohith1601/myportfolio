import React, { useEffect } from 'react';
import "./About.css";
import profile from "../../assets/profile.jpg";

const About = () => {
  useEffect(() => {
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {
      for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
      }
      for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
      }

      // Add the "active-link" class to the clicked tab link
      document.querySelector(`[data-tab=${tabname}]`).classList.add("active-link");

      // Find the corresponding tab content and add the "active-tab" class
      document.getElementById(tabname).classList.add("active-tab");
    }

    for (let tablink of tablinks) {
      tablink.addEventListener('click', function() {
        opentab(this.getAttribute('data-tab'));
      });
    }

    return () => {
      for (let tablink of tablinks) {
        tablink.removeEventListener('click', function() {
          opentab(this.getAttribute('data-tab'));
        });
      }
    };
  }, []);

  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I'm Rohith Reddy, a full-stack web developer. I have a passion for web development and love to create websites and web applications that are user-friendly and visually appealing.
            </p>
            <p>
              I have experience working with modern web technologies including HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I am always looking to learn new technologies and improve my skills as a developer.
            </p>
          </div>
          <div className="tab-titles">
            <p className="tab-links active-link" data-tab="skills">Skills</p>
            <p className="tab-links" data-tab="experiences">Experiences</p>
            <p className="tab-links" data-tab="education">Education</p>
          </div>
          <div className="tab-contents active-tab" id="skills">
            <ul>
              <li><span>Programming</span> <br /> C, Java, Javascript</li>
              <li><span>Web Development</span><br />HTML, CSS, React Js, Node Js, Express Js, Mongo DB</li>
              <li><span>Core Subjects</span><br />DBMS, OS, OOP</li>
            </ul>
          </div>
          <div className="tab-contents" id="experiences">
            <ul>
              <li><span>AWS Cloud Internship (2023)</span> <br />Learned and worked with AWS services like EC2, S3, RDS.</li>
            </ul>
          </div>
          <div className="tab-contents" id="education">
            <ul>
              <li><span>B.Tech (2021-Present)</span> <br />Studying CSE at Gayatri Vidya Parishad College of Engineering(A), Visakhapatnam <br />CGPA: 8.93</li>
              <li><span>Intermediate (2019-2021)</span><br />Studied MPC at NRI Jr College, Tenali <br />Marks: 973/1000</li>
              <li><span>10th class (2018-2019)</span><br />Studied at Sacred Hearts School, Kuchipudi <br />GPA: 9.3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
