import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Certification from './Components/Certifications/Certification'
import Projects from './Components/Projects/Projects'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div className='app'>
      <NavBar/> 
      <Hero/>  
      <About/>   
      <Certification/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
