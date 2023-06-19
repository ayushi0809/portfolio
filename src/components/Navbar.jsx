import React, {useState , useEffect} from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import {Link } from 'react-scroll';

const Navbar = () => {
   const [nav, setNav] = useState(false)
   const [activeSection, setActiveSection] = useState('');
const [isScrolling, setIsScrolling] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    if (!isScrolling) {
      const scrollPosition = window.scrollY;
      const sections = ['home', 'about', 'skills', 'career', 'contact'];

      let activeSection = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop - 100) {
          activeSection = section;
        }
      }

      setActiveSection(activeSection);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [isScrolling]);

  const links = [
    {
      id: 1,
      text:'home'
    },
    {
      id: 2,
      text:'about'
    },
    {
      id: 3,
      text:'skills'
    },
    {
      id: 5,
      text:'career'
    },
    {
      id: 6,
      text:'contact'
    },
  ]
  return (
    <div className="flex z-50 bg-slate-900 justify-between items-center w-full h-16 px-4 text-white md:fixed">
      <div></div>
      <ul className="hidden md:flex">
        {links.map(link => <li key = {link.id} className={`px-4 cursor-pointer font-medium hover:scale-110 duration-200  capitalize pb-2 hover:text-white hover:underline ${activeSection === link.text ? 'text-white underline transform scale-110 duration-200' : 'text-yellow-500'}`}>
        <Link to={link.text} smooth={true} duration={500} spy={true} exact="true" offset={-70}>
        {link.text}
      </Link>
        </li>)} 

      </ul>
      <div onClick = {() => setNav(!nav)} className = 'md:hidden cursor-pointer pr-4 z-10 text-gray-500'>
      {nav ? <FaTimes size={30}/> : <FaBars size = {30}/>}
      </div>
      {nav && (
        <ul className = "z-50 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
           {links.map(link => <li key = {link.id} className="px-4 cursor-pointer font-medium  text-gray-500 capitalize py-6 text-4xl">
           <Link onClick={() => setNav(!nav)} to ={link.text} smooth duration={500}>{link.text}</Link>
        </li>)}
        </ul>
      )}

    </div>
  )
}

export default Navbar