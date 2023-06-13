
import React, { useEffect, useRef} from 'react';
import Typed from 'typed.js';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-scroll';

const Home = () => {
  const textRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: ['Full Stack Developer', 'Open Source Contributor'], // Array of strings to type
      typeSpeed: 70, // Typing speed in milliseconds
      backSpeed: 70,
      loop: true, // Whether to loop the animation
    };

    const typed = new Typed(textRef.current, options);

    // Clean up the typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      name="home"
      className="md:h-screen w-full"
    >
    <div className="max-w-screen-lg mx-auto grid grid-cols-1 items-center justify-center h-screen px-4 md:grid-cols-2">
      <div className="flex flex-col justify-center h-full">
        
          <h3 className="text-3xl sm:text-4xl text-gray-600 font-bold sm:mt-2">
            Hi there,
          </h3>
          <h2 className="text-4xl sm:text-5xl text-gray-600 font-bold">
            I'm Ayushi Khandelia
          </h2>
          <div className="text-3xl sm:text-4xl text-gray-600 font-bold">
            <span className="text-blue-400 ext-3xl sm:text-4xl  font-bold" ref={textRef}></span>
          </div>
          <div >
            <Link to = "career" smooth duration = {500} className=" group w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded cursor-pointer flex flex-row">
              Career
              <span className="mt-1 px-1 justify-center items-center group-hover:rotate-90 duration-300"> <AiOutlineArrowRight /> </span>
              
            </Link>

          </div>
        
      </div>
      <div >
        <img
          src="/profile2.svg"
          className="rounded-2xl  md:ml-16 p-4 md:p-0 w-full h-full object-cover"
          alt="Profile"
        />
      </div>
    </div>
    </div>
  );

};

export default Home;
