import React from 'react'
import "./Hero.css"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile from "../../assets/profile.jpg"

const openResume=()=>{
    window.open("https://drive.google.com/file/d/1-NaNXIM8OsBzw03nPJuAfHadeFS0O_Mc/view?usp=drive_link","_blank")
}

const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <img className='image' src={profile} alt=''/>
        <h1><span>I'm Rohith Reddy</span>, MERN Stack Developer</h1>
        <p>A computer science student passionate about programming and design.</p>
        <div className="hero-action">
        <AnchorLink className="anchor-link" href="#contact"><div className="hero-connect">Connect with Me</div></AnchorLink>
            <div className="hero-resume" onClick={openResume}>My Resume</div>
        </div>
      
    </div>
  )
}

export default Hero
