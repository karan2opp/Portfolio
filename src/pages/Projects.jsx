import React from 'react'
import Card from '../components/Card'
import { Element } from 'react-scroll';
const data = [
  {
    title: "Blog Website",
    description: "A full stack blog application where users can read, write, edit, and delete blog posts. Includes authentication and comments section.",
    icon: "/book.png"
  },
  {
    title: "E-commerce Store",
    description: "An online shopping platform with product listings, cart functionality, checkout, and admin dashboard to manage inventory and orders.",
    icon: "/book.png"
  },
  {
    title: "Job Portal",
    description: "A platform where job seekers can apply for jobs and employers can post job listings. Includes resume uploads and email notifications.",
     icon: "/book.png"
  },
  {
    title: "Social Media App",
    description: "A basic social networking app with user profiles, friend requests, messaging, and news feed features.",
    icon: "/book.png"
  },
  {
    title: "Online Learning Platform",
    description: "A platform where instructors can upload courses and students can enroll, watch videos, and take quizzes.",
    icon: "/book.png"
  },
  {
    title: "Project Management Tool",
    description: "A Trello-like application for creating boards, adding tasks, assigning team members, and tracking project progress.",
    icon: "/book.png"
  }
];

const Projects = ({Mode}) => {
  return (
     <Element name="Projects">
    <div className=' mt-15'>
        <h1 className='text-3xl ml-10'>Open Source Projects</h1>
        <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-5 ml-10 mt-5'>
        
       {data.map((project,index)=>(
 <a href="https://github.com/karan2opp/Portfolio.git" target="_blank"
  rel="noopener noreferrer">                 <div key={index} className={`grid grid-rows-3 w-[90%] sm:w-3/4 md:w-80 rounded-lg  h-36 mt-10 col-span-1 shadow-2xl drop-shadow-[0_0_50px_#171c28] ${Mode ? "" : " hover:bg-[#55198b]"} hover:drop-shadow-[0_0_25px_#686c75] transform transition duration-300 hover:-translate-y-3`}>
      <div  className='row-span-1 ml-5 flex gap-2'>
       
        <img className='h-3/4' src={project.icon} alt="" />
        <h1 className=' '>{project.title}</h1></div> 
      <p className='row-span-2 ml-5'>{project.description}</p> 
</div> </a>


  ))
       }</div>
    </div>
    </Element>
  )
}

export default Projects
