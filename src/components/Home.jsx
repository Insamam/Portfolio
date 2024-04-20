import React, { useRef } from 'react';
import { Element } from 'react-scroll';
import bg from '../assets/images/bg.svg';
import gitb from '../assets/icons/gitb.png';
import linkedin from '../assets/icons/linkedin.svg';
import fullstack from '../assets/images/fullstack.png';
import '../App.css';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  return (
    <Element name="home">
      <motion.div
        ref={ref}
        className="relative flex flex-col items-center justify-center min-h-screen bg-sky-50 max-h-screen"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Background image */}
        <img
          src={bg}
          alt="Background"
          className="bg-image absolute inset-0 w-full h-full object-cover"
        />
        <motion.div
          className="text-center md:text-left text-gray-800 z-10 md:mr-96"
          initial={{ y: -100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-2"
            initial={{ y: -100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
          >
            Greetings!
          </motion.h1>
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ y: -100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
          >
            I'm <span className="text-blue-600 font-bold">Insamam</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl font-medium mb-4"
            initial={{ y: -100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
            transition={{ delay: 0.9, duration: 1, ease: 'easeOut' }}
          >
            A Dedicated Full Stack Developer
          </motion.p>

          {/* Container for LinkedIn and GitHub images */}
          <motion.div
            className="flex items-center justify-center md:justify-start"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
          >
            <a href="https://github.com/Insamam" target="_blank" rel="noopener noreferrer">
              <motion.img
                src={gitb}
                alt="GitHub"
                className="w-8 md:w-10 h-8 md:h-10 mr-2 mb-2 md:mb-0"
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ delay: 1.4, duration: 1, ease: 'easeOut' }}
              />
            </a>
            <a href="https://in.linkedin.com/in/insamam-s-2048b3257" target="_blank" rel="noopener noreferrer">
              <motion.img
                src={linkedin}
                alt="LinkedIn"
                className="w-8 md:w-10 h-8 md:h-10 ml-2"
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ delay: 1.6, duration: 1, ease: 'easeOut' }}
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Fullstack image - shown only on screens larger than medium */}
        <motion.img
          src={fullstack}
          alt="Fullstack"
          className="hidden md:block absolute right-0 bottom-0 max-w-[50%] max-h-[80%]"
          initial={{ x: '100vw', opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: '100vw', opacity: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
        />
      </motion.div>
    </Element>
  );
};

export default Home;