import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import github from '../assets/icons/github.svg';
import c from '../assets/icons/c.svg';
import cpp from '../assets/icons/cpp.svg';
import css from '../assets/icons/css.svg';
import expressjs from '../assets/icons/expressjs.svg';
import html from '../assets/icons/html.svg';
import java from '../assets/icons/java.svg';
import javascript from '../assets/icons/javascript.svg';
import mongodb from '../assets/icons/mongodb.svg';
import mysql from '../assets/icons/mysql.svg';
import nodejs from '../assets/icons/nodejs.svg';
import python from '../assets/icons/python.svg';
import reactjs from '../assets/icons/reactjs.svg';
import tailwind from '../assets/icons/tailwind.svg';
import typescript from '../assets/icons/typescript.svg';
import nextjs from '../assets/icons/nextjs.svg';

const Skills = () => {
  return (
    <Element name="skills" className="py-12 bg-sky-50">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
          <SkillIcon icon={c} name="C" />
          <SkillIcon icon={cpp} name="C++" />
          <SkillIcon icon={java} name="Java" />
          <SkillIcon icon={python} name="Python" />
          <SkillIcon icon={html} name="HTML" />
          <SkillIcon icon={css} name="CSS" />
          <SkillIcon icon={tailwind} name="TailwindCSS" />
          <SkillIcon icon={javascript} name="Javascript" />
          <SkillIcon icon={reactjs} name="ReactJs" />
          <SkillIcon icon={nodejs} name="NodeJs" />
          <SkillIcon icon={expressjs} name="ExpressJS" />
          <SkillIcon icon={nextjs} name="NextJS" />
          <SkillIcon icon={typescript} name="Typescript" />
          <SkillIcon icon={mongodb} name="MongoDB" />
          <SkillIcon icon={mysql} name="MySQL" />
          <SkillIcon icon={github} name="Github" />
        </div>
      </div>
    </Element>
  );
}

const SkillIcon = ({ icon, name }) => {
  return (
    <motion.div 
      className="flex flex-col items-center"
      whileHover={{ 
        scale: 1.1, 
        boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '0.5rem' // Make border rounded
      }}
      whileTap={{ scale: 0.9 }} // Scale down on tap
      transition={{ duration: 0.2 }} // Smooth transition duration
    >
      <img 
        src={icon} 
        alt={name} 
        className="w-16 h-16 mb-2" 
        style={{ width: '100%' }} // Ensure image width matches container width
      />
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
}

export default Skills;
