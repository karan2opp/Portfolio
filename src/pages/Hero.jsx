import React from 'react'
import wavinghand from "../assets/wavinghand.json";
import desk from "../assets/desk.json";
import Lottie from 'lottie-react';
import SocialRow from '../components/SocialRow';
import { FaGithub, FaLinkedin, FaEnvelope, FaGitlab, FaFacebook, FaMedium, FaStackOverflow } from 'react-icons/fa';
import Education from './Education';

const Hero = ({Mode}) => {
     const socials = [
    { icon: <FaGithub />, bg: 'bg-[#333]' },
    { icon: <FaLinkedin />, bg: 'bg-[#0A66C2]' },
    { icon: <FaEnvelope />, bg: 'bg-[#EA4335]' },
    { icon: <FaGitlab />, bg: 'bg-[#FC6D26]' },
    { icon: <FaFacebook />, bg: 'bg-[#4267B2]' },
    { icon: <FaMedium />, bg: 'bg-black' },
    { icon: <FaStackOverflow />, bg: 'bg-[#F48024]' },
  ];
  return (<>
    <div id="Hero" className='grid grid-cols-1 md:grid-cols-2 mt-20 '>
      <div className='col-span-1 flex flex-col gap-10 ml-10 '>
           <h1 className='  text-2xl sm:text-3xl lg:text-5xl font-serif  '>Hii, I'm Karan
             <style>
        {`
          .wave {
            display: inline-block;
          
            
            animation: wave-animation 2s infinite;
            transform-origin: 70% 70%;
          }

          @keyframes wave-animation {
            0%   { transform: rotate(0deg); }
            15%  { transform: rotate(15deg); }
            30%  { transform: rotate(-10deg); }
            45%  { transform: rotate(15deg); }
            60%  { transform: rotate(-10deg); }
            75%  { transform: rotate(15deg); }
            100% { transform: rotate(0deg); }
          }
        `}
      </style>

      <span className="wave text-2xl md:text-5xl " role="img" aria-label="waving hand">
        👋
      </span>
           </h1>
           <p className='  text-xl md:text-3xl  '>Hi, I'm Karan — a passionate developer who loves crafting clean and efficient code. I build intuitive web experiences that bring ideas to life.
</p>
      </div>
      <div className='col-span-1 h-80 mt-2'>
        <Lottie className='w-full h-full ' animationData={desk} loop={true} />
      </div>
    </div>

    <div className=' ml-10 mt-2  '>
        <SocialRow  data={socials}/>
    </div>
    <div className=" ml-10 mt-5  flex justigy-center snm:justify-normal gap-10 ">
        <button className={`${Mode ? "text-white" : "text-white"} bg-[#55198c] hover:bg-white hover:text-[#55198c] rounded-md p-2 transform transition duration-300 hover:-translate-y-1 hover:border-[#55198c] hover:border-[1px] hover:shadow-lg`}>Contact me</button>
        <a href='/Karan-Developer.pdf' download className={`${Mode ? "text-white" : "text-white"} bg-[#55198c] hover:bg-white hover:text-[#55198c]  rounded-md p-2 transform transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#55198c] hover:border-[1px]`}>Download MY Resume</a> </div> 
         
    </>
  )
}

export default Hero
