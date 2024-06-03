import './nav.css'
import 'react-icons/bs';
//import { BsFillMoonStarsFill } from 'react-icons/bs';
import logo from './images/logo192.png'
function Nav(){
    return(
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
            <img src={logo} alt="logo" className="w-8 h-8 mr-2" />
        <h1 className="font-poppins text-xl cursor-pointer hover:to to-blue-700">Explore</h1>
        <ul className="flex items-center">
           /*<BsFillMoonStarsFill className=" cursor-pointer text-2xl"/>/*
          <li className='nav-item cursor-pointer'>
            <a>Home</a>
          </li>
          <li className='nav-item cursor-pointer'>
           <a>About</a>
          </li>
          <li className='nav-item cursor-pointer'><a>experiences</a></li>
          
          <li className='resume'>
            <a
              className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:to-blue-600"
              href="#"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    );
}
export default Nav
