import React from 'react';
import './Certification.css';

const Certification = () => {
    return (
        <div id='certifications' className="certificates">
            <div className="sub-title"><h1>Certifications</h1></div>
            <div className="certificates-list">
                <div className='certificate'>
                    <i className="fas fa-code"></i>
                    <h2>Web Development using React Js and Node Js</h2>
                    <p>A course certification from GeeksForGeeks</p>
                    <a href="c1.html" target="_blank" rel="noopener noreferrer">VIEW CERTIFICATE</a>
                </div>
                <div className='certificate'>
                    <i className="fab fa-java"></i>
                    <h2>Nptel Java Certification</h2>
                    <p>Scored Elite + Silver in Nptel Java Examination</p>
                    <a href="c2.html" target="_blank" rel="noopener noreferrer">VIEW CERTIFICATE</a>
                </div>
                <div className='certificate'>
                    <i className="fab fa-python"></i>
                    <h2>Python Foundation Course</h2>
                    <p>A certification from Infosys SpringBoard</p>
                    <a href="c3.html" target="_blank" rel="noopener noreferrer">VIEW CERTIFICATE</a>
                </div>
            </div>
        </div>
    );
}

export default Certification;
