import React from 'react'
import { Element } from 'react-scroll'
const Education = () => {
  return (
    <Element name="Education">
    <div className=' mt-10 ml-10  flex flex-col gap-14'>
      <h1 className='text-3xl '>Education</h1>
     <div className='flex gap-5 group relative '>
      <div className=' '>
        <img className=" h-24 w-32 sm:w-32 sm:h-32" src="/kuk.png" alt="" /></div>
  <div className='flex flex-col gap-5 sm:gap-2  '>
    <h1 className=' text-xl md:text-2xl'>Kurukshetra University</h1>
  <ul className='text-md md:text-lg flex flex-col gap-5 sm:gap-2 '>
    <li>Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE)</li>
    <li>Shri Krishan Institute of Engineering and Technology</li>
    <li>2023 – Present</li>
    <li>Currently in 2nd Year (Expected Graduation: 2027)</li>
  </ul>
  </div>
  <div className='h-[0.75px] origin-left  scale-x-[0.75] group-hover:bg-[#aaa5ff] group-hover:scale-x-90 w-full bg-[#62656c] absolute -bottom-5 transition-transform duration-1000'></div>
</div>

<div className='flex gap-5 relative group '>
    <div className=''>
      <img src="/tbn.png" alt="" className='w-32 h-24 sm:w-32 sm:h-32' />
      </div>
    <div className='flex flex-col gap-5 sm:gap-2'> 
      <h2 className=' text-xl md:text-2xl'>Senior Secondary Education (Class 12th)</h2>
  <ul className='text-md :text-lg flex flex-col gap-5 sm:gap-2'>
    <li>Centeral Board Of School Education (CBSE)</li>
    <li>Tagore Balniketan Senior Secondary School, Pehowa</li>
    <li>Year of Completion: 2023</li>
    <li>Percentage: 78%</li>
  </ul> </div>
  <div className='h-[0.75px] origin-left  scale-x-[0.75] group-hover:bg-[#aaa5ff] group-hover:scale-x-90 w-full bg-[#62656c] absolute -bottom-5 transition-transform duration-1000'></div>

</div>

    </div> </Element>
  )
}

export default Education
