import logo from './logo.svg';
import './App.css';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import './exp.css';
import image from './devimg.jpg';
import Tile from './tile.js'
import Banner from './banner.js'
import Icon from '@mdi/react';
import { mdiEmoticonAngryOutline } from '@mdi/js';
import { mdiDeathlyHallows } from '@mdi/js';
import Services from './Services.js'
import Typing from './typing.js'
import Skills from './Skills.js'
import AboutMe from './aboutme.js'
import Experiences from './experiences.js'
import Nav from './nav.js'
import Projects from'./projects.js';
function App() {
  return (
    
    <main>
       <Nav/>
      <section className="text-center py-20 bg-gray-100">
        <div className="max-w-xl mx-auto">
          <h2 className="text-5xl py-2 text-teal-600 font-bold">Purab Ray</h2>
         
         <h3 className="text-xl py-4 text-gray-700"> <Typing
          text={[
            "Hello there, I am Purab Ray",
            "A student passionate about learning and exploring",
            
            "I am an aspiring full-stack developer",
          ]}
          typingSpeed={100}
          deletingSpeed={50}
          duration={1000}
      /></h3>
          <img src={image} alt="Developer" className="mx-auto mb-6 rounded-full w-48 h-48 object-cover shadow-lg" />
          <p className="text-md py-4 leading-8 text-gray-600">Crafting seamless web experiences one line of code at a time.</p>
          <div className="text-3xl flex justify-center gap-8 py-6 text-gray-700">
            <a href="#" className="hover:text-teal-500 transition duration-300 flex align-middle justify-center"><AiFillLinkedin /></a>
            <a href="#" className="hover:text-teal-500 transition duration-300"><AiFillTwitterCircle /></a>
            <a href="#" className="hover:text-teal-500 transition duration-300"><AiFillYoutube /></a>
          </div>
        </div>
      </section>
      <div>
          <AboutMe />
          <hr className="border-gray-600 mb-0.10" />
        </div>
        <div>
          <Skills />
          <hr className="border-gray-600 mb-0.10" />
        </div>
        <div>
          <Experiences />
          <hr className="border-gray-600 mb-0.10" />
        </div>
        <div>
          <Projects />
          <hr className="border-gray-600 mb-0.10" />
        </div>
<section className="bg-gray-800 py-20">
            <div className="container mx-auto px-6">
                <header>
                    <h1 className="text-5xl font-bold text-blue-400 text-center mb-12">Eductation</h1>
                </header>
                <div className="space-y-8">
                    <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-2xl hover:bg-blue-500 transition duration-300 cursor-pointer fade-in">
                    Completed Standard XII diploma
                    </div>
                    <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-2xl hover:bg-blue-500 transition duration-300 cursor-pointer fade-in">
                        Pursuing BSC in Computer science
                    </div>
                </div>
            </div>
        </section>
        
       
     
    
      {/* <Icon path={mdiEmoticonAngryOutline} size={1} />
      <Icon path={mdiDeathlyHallows} size={1} /> */}
    
      <footer className="text-center py-10 bg-gray-800 text-white">
     <p>&copy; 2024 Explore. All rights reserved.</p>
   </footer>
    </main>
    
  );
}

export default App;