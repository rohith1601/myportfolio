import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Certification from './Components/Certifications/Certification'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from './Components/Contact/Contact'
import Experience from './Components/Experience/Experience'
import { Projects } from './Components/Projects/Projects'

const App = () => {
  return (
    <div className='app'>
      <NavBar/> 
      <Hero/>  
      <About/>   
      <Experience/>
      <Certification/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App