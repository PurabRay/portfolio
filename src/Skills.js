import React from 'react';
import './skills.css';

function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>

          <h2 className='py-4' tech-description>techstacks I've worked with</h2>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <i className='fa-brands fa-html5 fa-3x'></i>
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <i className='fa-brands fa-css3-alt fa-3x'></i>
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <i className='fa-brands fa-js-square fa-3x'></i>
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <i className='fa-brands fa-react fa-3x'></i>
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <i className='fa-brands fa-github fa-3x'></i>
            <p className='my-4'>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <i className='fa-brands fa-node-js fa-3x'></i>
            <p className='my-4'>NODE JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <i className='fa-solid fa-database fa-3x'></i>
            <p className='my-4'>MONGO DB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <span className='text-4xl'>&#9776;</span>
            <p className='my-4'>TAILWIND</p>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Skills;