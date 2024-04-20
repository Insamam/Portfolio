import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import ecommerce from '../assets/images/ecommerce.png';
import blog from '../assets/images/blog.png';
import socialmedia from '../assets/images/socialmedia.png';
import todolist from '../assets/images/todolist.png';
import githubLogo from '../assets/icons/github.svg';

const Projects = () => {
  return (
    <Element name="projects">
      <div className="min-h-screen bg-sky-50 mt-20 mb-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
          <div className="flex flex-wrap justify-center">
            {/* First Pair */}
            <motion.div
              className="m-4 relative rounded-lg overflow-hidden shadow-2xl"
              style={{ maxWidth: "100%" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image and GitHub logo container */}
              <div className="relative">
                <motion.img
                  src={ecommerce}
                  alt="E-Commerce"
                  className="w-full h-64 object-cover rounded-2xl"
                  
                />
                {/* GitHub logo */}
                <a
                  href="https://github.com/Insamam/E-Commerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-full right-0 mt-2 mr-2"
                >
                  <img src={githubLogo} alt="GitHub" className="w-6 h-6" />
                </a>
              </div>
              {/* Description */}
              <div className="p-4 text-center">
                <p className="font-bold">E-Commerce Platform</p>
                <p className="text-sm whitespace-normal">
                  Product search, cart, user auth, management, and collections.
                </p>
              </div>
            </motion.div>

            {/* ************************************ */}
            <motion.div
              className="m-4 relative rounded-lg overflow-hidden shadow-2xl"
              style={{ maxWidth: "100%" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image and GitHub logo container */}
              <div className="relative">
                <motion.img
                  src={blog}
                  alt="Blog Platform"
                  className="w-full h-64 object-cover rounded-2xl"
                  
                />
                {/* GitHub logo */}
                <a
                  href="https://github.com/Insamam/Blog-Platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-full right-0 mt-2 mr-2"
                >
                  <img src={githubLogo} alt="GitHub" className="w-6 h-6" />
                </a>
              </div>
              {/* Description */}
              <div className="p-4 text-center">
                <p className="font-bold">Blog Platform</p>
                <p className="text-sm whitespace-normal">
                  Functionality for viewing, editing, creating, and updating blogs.
                </p>
              </div>
            </motion.div>

            {/* ************************************ */}
            <motion.div
              className="m-4 relative rounded-lg overflow-hidden shadow-2xl"
              style={{ maxWidth: "100%" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image and GitHub logo container */}
              <div className="relative">
                <motion.img
                  src={socialmedia}
                  alt="Social Media"
                  className="w-full h-64 object-cover rounded-2xl"
               
                />
                {/* GitHub logo */}
                <a
                  href="https://github.com/Insamam/Social_Media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-full right-0 mt-2 mr-2"
                >
                  <img src={githubLogo} alt="GitHub" className="w-6 h-6" />
                </a>
              </div>
              {/* Description */}
              <div className="p-4 text-center">
                <p className="font-bold">Social Media</p>
                <p className="text-sm whitespace-normal">
                  Enabling users to view, edit, create, and delete posts.
                </p>
              </div>
            </motion.div>

            {/* ************************************ */}
            <motion.div
              className="m-4 relative rounded-lg overflow-hidden shadow-2xl"
              style={{ maxWidth: "100%" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image and GitHub logo container */}
              <div className="relative">
                <motion.img
                  src={todolist}
                  alt="To-Do List"
                  className="w-full h-64 object-cover rounded-2xl"
                  
                 
                />
                {/* GitHub logo */}
                <a
                  href="https://github.com/Insamam/To-Do-List"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-full right-0 mt-2 mr-2"
                >
                  <img src={githubLogo} alt="GitHub" className="w-6 h-6" />
                </a>
              </div>
              {/* Description */}
              <div className="p-4 text-center">
                <p className="font-bold">To-Do-List</p>
                <p className="text-sm whitespace-normal">
                  Allowing users to create tasks and mark them as completed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;