import React, { useEffect } from 'react';
import "./About.css";
import profile from "../../assets/profile.jpg";

const About = () => {
  useEffect(() => {
    const tablink = document.querySelector(".tab-link[data-tab='education']");
    const tabcontent = document.getElementById("education");

    if (tablink && tabcontent) {
      tablink.classList.add("active-link");
      tabcontent.classList.add("active-tab");
    }
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
          <div className='education'>
            <div className="tab-titles">
              <h1>Education</h1>
            </div>
            <div className="tab-contents active-tab" id="education">
              <ul>
                <li><span>B.Tech (2021-Present)</span> <br />Studying CSE at Gayatri Vidya Parishad College of Engineering(A), Visakhapatnam <br />CGPA: 8.93</li>
                <li><span>Intermediate (2019-2021)</span><br />Studied MPC at NRI Jr College, Tenali <br />Marks: 973/1000</li>
                <li><span>10th class (2018-2019)</span><br />Studied at Sacred Hearts School, Kuchipudi <br />GPA: 9.3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
