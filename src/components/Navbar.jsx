import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link as ScrollLink } from 'react-scroll';
import { Element } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
<header className="sticky top-0 z-50">  
       <div className=''>
      {isDesktopOrLaptop && (
        <nav className={`sticky top-0 flex justify-center items-center py-4 border border-gray-200 w-full md:w-[700px] px-4 mx-auto shadow shadow-gray-400 bg-white z-10 rounded-[50px] md:sticky md:top-0`}>
          {/* Desktop menu */}
          <div className="flex w-full">
            <div className="flex-grow rounded-full">
              <ScrollLink
                to="home"
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300 hover:bg-slate-100 rounded-full p-2 mx-2 flex items-center justify-center"
              >
                Home
              </ScrollLink>
            </div>
              <div className="flex-grow rounded-full">
                <ScrollLink
                  to="about"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300 hover:bg-slate-100 rounded-full p-2 mx-2 flex items-center justify-center"
                >
                  About
                </ScrollLink>
              </div>
              <div className="flex-grow rounded-full">
                <ScrollLink
                  to="skills"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300 hover:bg-slate-100 rounded-full p-2 mx-2 flex items-center justify-center"
                >
                  Skills
                </ScrollLink>
              </div>
              <div className="flex-grow rounded-full">
                <ScrollLink
                  to="projects"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300 hover:bg-slate-100 rounded-full p-2 mx-2 flex items-center justify-center"
                >
                  Projects
                </ScrollLink>
              </div>
              <div className="flex-grow rounded-full">
                <ScrollLink
                  to="contact"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300 hover:bg-slate-100 rounded-full p-2 mx-2 flex items-center justify-center"
                >
                  Contact
                </ScrollLink>
              </div>
            </div>
          </nav>
        )}

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-800 hover:text-blue-600 focus:outline-none m-4"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`${
            isOpen ? 'fixed inset-0 z-10 overflow-y-auto' : 'hidden'
          } md:hidden bg-gray-900 bg-opacity-50 transition-opacity duration-300`}
          onClick={toggleMenu}
        >
          <div
            className={`${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            } transform transition-transform duration-300 bg-white h-full w-3/4 max-w-xs p-4 overflow-y-auto`}
          >
            <div className="flex justify-between items-center mb-4">
              <button
                type="button"
                className="text-gray-800 hover:text-blue-600 focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-2 text-center">
              {/* Mobile menu links */}
              <ScrollLink
                to="home"
                smooth={true}
                offset={-70}
                duration={500}
                className="block text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300"
                onClick={toggleMenu}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                offset={-70}
                duration={500}
                className="block text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300"
                onClick={toggleMenu}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="skills"
                smooth={true}
                offset={-70}
                duration={500}
                className="block text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300"
                onClick={toggleMenu}
              >
                Skills
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                offset={-70}
                duration={500}
                className="block text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300"
                onClick={toggleMenu}
              >
                Projects
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                className="block text-gray-800 hover:text-blue-600 font-medium transition-colors duration-300"
                onClick={toggleMenu}
              >
                Contact
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
      </header>
    
  );
};

export default Navbar;