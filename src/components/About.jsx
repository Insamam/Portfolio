import React, { useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import about from '../assets/images/about.png';
import { motion, useInView } from 'framer-motion';
import '../App.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  return (
    <Element name="about">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-sky-50 relative"
      >
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          src={about}
          alt="About"
          className="w-full md:w-1/2 md:max-w-md mb-4 md:mb-0 about-img"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:w-1/2 md:ml-4 flex flex-col justify-center items-center"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">About Me</h1>
          <p className="text-lg font-medium leading-relaxed text-center">
            Hi, I'm a passionate full-stack developer with extensive knowledge in both front-end and back-end
            technologies. Currently pursuing my B.Tech in IT, I'm dedicated to expanding my skills further. My next
            endeavor is diving into the world of artificial intelligence.
          </p>
        </motion.div>
      </motion.div>
    </Element>
  );
};

export default About;