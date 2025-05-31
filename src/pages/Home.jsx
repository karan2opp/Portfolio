import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Hero from './Hero';
import Skill from './Skill';
import Education from './Education';
import Projects from './Projects';
import ContactMe from './Contactme';

const Home = () => {
     const [lightMode, setLightMode] = useState(() => {
    
    const stored = localStorage.getItem('lightMode');
    return stored === 'true'; 
  });
   useEffect(() => {
    localStorage.setItem('lightMode', lightMode);
  }, [lightMode]);
    
  return (
    <div className={`   ${lightMode ? "bg-white text-gray-800" : "bg-[#171c28] text-white"}  overflow-x-hidden`}>
        <Navbar Mode={lightMode} setMode={setLightMode} />
         <Hero Mode={lightMode}   />
         <Skill/>
         <Education/>
         <Projects Mode={lightMode}  />
         <ContactMe Mode={lightMode}/>
    </div>
  )
}

export default Home
