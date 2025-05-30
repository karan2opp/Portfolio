import React from 'react'
import skill from "../assets/skill.json";
import Lottie from 'lottie-react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiC, SiCplusplus, SiFirebase, SiDocker,  SiPython } from 'react-icons/si';
import { Element } from 'react-scroll';
import SocialRow from '../components/SocialRow';

const Skill = () => {
   


const techIcons = [
  { icon: <FaHtml5 />, bg: 'bg-[#E44D26]' },
  { icon: <FaCss3Alt />, bg: 'bg-[#1572B6]' },
  { icon: <FaJs />, bg: 'bg-[#F7DF1E] text-black' },
  { icon: <SiC />, bg: 'bg-[#A8B9CC]' },
  { icon: <SiCplusplus />, bg: 'bg-[#00599C]' },
  { icon: <FaReact />, bg: 'bg-[#61DAFB] text-black' },
  { icon: <SiTailwindcss />, bg: 'bg-[#38B2AC]' },
  { icon: <FaNodeJs />, bg: 'bg-[#3C873A]' },
  { icon: <SiMongodb />, bg: 'bg-[#47A248]' },
  { icon: <FaGit />, bg: 'bg-[#F05032]' },
  { icon: <FaGithub />, bg: 'bg-[#333]' },
  { icon: <SiFirebase />, bg: 'bg-[#FFCA28] text-black' },

];

  return (
    
    <div id='Skills' className='grid      grid-cols-1 md:grid-cols-2 '>
         <div className='col-span-1 md:order-2 mr-2'>
        <div className='mt-15 flex  flex-col text-xl md:text-2xl gap-5 ml-10 md:ml-0'>
        <h1>What I do</h1>
        <p>CRAZY FULL STACK DEVELOPER WHO WANT TO EXPLAORE EVERY TECH STACK</p>
        <SocialRow data={techIcons} />
        <p>⚡ Develop highly interactive and responsive front-end UIs for web  applications</p>
        <p>⚡ Skilled in creating clean, modern, and user-friendly designs</p>
        <p>⚡ I focus on pixel-perfect design implementation and consistent styling to deliver a polished user experience.</p>
        </div>
      </div>
      <div className='col-span-1 md:order-1   '>
<Lottie className='w-full h-96 md:h-full ' animationData={skill} loop={true} />
      </div>
     
    </div> 
  )
}

export default Skill
