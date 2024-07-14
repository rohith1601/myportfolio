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
                    <p>A course certification from Udemy</p>
                    <a href="https://drive.google.com/file/d/1VUhdwRxdJBcFilT--hggZHRqPguDCfzk/view?usp=drive_link" target="_blank">VIEW CERTIFICATE</a>
                </div>
                <div className='certificate'>
                    <i className="fa-brands fa-aws"></i>
                    <h2>AWS Data Engineering Certification</h2>
                    <p>A course certification from AICTE</p>
                    <a href="https://drive.google.com/file/d/1qfXlrcm5PkaLpLpk3BvuLY3_mGY3dcZh/view?usp=drive_link" target="_blank" rel="noopener noreferrer">VIEW CERTIFICATE</a>
                </div>
            </div>
        </div>
    );
}

export default Certification;
