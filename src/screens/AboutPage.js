import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import SkillsSection from '../components/SkillsSection';
import Title from '../components/Title';
import design from '../images/design.svg';
import intelligence from '../images/intelligence.svg';
import { motion } from 'framer-motion';
import { routeFade } from '../utils/animation';

const AboutPage = () => {
  return (
    <motion.div
      className='AboutPage'
      variants={routeFade}
      initial='initial'
      animate='animate'
    >
      <Title title={`About Me`} span={`About Me`} />
      <AboutSection />
      <Title title={`Software Skills`} span={`Software Skills`} />
      <div className='skillsContainer'>
        <SkillsSection skill={'VS Code Editor'} progress={'90%'} />
      </div>
      <Title title={'Services'} span={'Services'} />
      <div className='services-container'>
        <ServicesSection
          image={intelligence}
          title={'Full Stack Program - Guvi Geek Network Pvt. Ltd.'}
          text={
            'Gained knowledge and skills on web development with MERN  Technologies (MongoDB, Express Js, React Js, Node Js)'
          }
          text2={'January 2021 - April 2021'}
          experienceDetails={
            'Implemented knowledge in completing full stack projects with user experience and better designs.'
          }
        />
        <ServicesSection
          image={design}
          title={'Senior process Executive - cognizant technology solutions'}
          text={
            'Experienced for 4.3+ years in F & A domain'
          }
          text2={'August 2018 - present'}
          experienceDetails={
            'In-depth knowledge of F & A domain'
          }
        />
      </div>
    </motion.div>
  );
};

export default AboutPage;
