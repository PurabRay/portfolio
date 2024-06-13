import React from 'react';
import './about.css';

const AboutMe = () => {
    return (
      <div name='about' className='w-full bg-gradient-to-b from-[#0a192f] to-[#1e293b] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 animate-pulse'>About Me</p>
          </div>
          <div className='about-content'>
            <p className='text-lg animate-fadeInLeft'>
              As a student passionate about front-end development, I am constantly seeking opportunities to expand my knowledge and
              hone my skills. With a strong foundation in HTML, CSS, and JavaScript, I strive to create intuitive and visually
              appealing user interfaces that deliver exceptional user experiences.
            </p>
            <p className='text-lg mt-4 animate-fadeInRight delay-500'>
              My journey into the world of web development has been fueled by a curiosity to understand how modern websites and
              applications are built. I am particularly intrigued by the ever-evolving landscape of front-end technologies, and I
              embrace the challenge of staying up-to-date with the latest trends and best practices.
            </p>
            <p className='text-lg mt-4 animate-fadeInLeft delay-1000'>
              Through practical projects and hands-on learning, I have developed a solid understanding of React, a powerful JavaScript
              library for building user interfaces. I am fascinated by its component-based architecture and the ability to create
              reusable and modular code, enabling efficient development and maintenance of complex applications.
            </p>
          </div>
        </div>
      </div>
    );
  };
export default AboutMe;