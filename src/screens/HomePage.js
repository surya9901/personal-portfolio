import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import Typed from 'react-typed';
import { motion } from 'framer-motion';
import { routeFade } from '../utils/animation';
import DownloadLink from '../components/DownloadLink';
import resume from '../assets/Resume.pdf';

const HomePage = () => {
  return (
    <div className='HomePage'>
      <motion.header
        className='intro'
        variants={routeFade}
        initial='initial'
        animate='animate'
      >
        <h1 className='intro-text'>
          Hi! I'm{' '}
          <span className='typed'>
            <Typed
              className='typed-text'
              strings={[
                'Ramachandran',
                'a React Js Developer',
                'Ramachandran',
                'a React Js Developer',
                'a Software Developer',
                'Ramachandran',
                'a MERN Developer',
                'a Nature Lover!',
              ]}
              typeSpeed={70}
              backSpeed={90}
              loop
            />
          </span>
        </h1>
        <p className='intro-text-para'>
          Courteous and enthusiastic, I am interested in IT and everything in
          its orbit. I recently began to be fascinated by web programming, e.g.,
          developing apps and building websites. Got selected at MNC company as
          a programmer, I gained experience of working in this area. I am keen
          to gain more experience in this field, for this reason, I am looking
          for a company willing to offer me a placement among their developers.
          In return, I would offer my full commitment, and be a pleasant and
          friendly addition to your team, I am therefore currently looking for a
          job as a fullstack JavaScript developer / ReactJs.
        </p>
        <div className='icons'>
          <a
            href='https://www.linkedin.com/in/ramachandran-selvavinayagam/'
            className='icon-holder'
            rel='noreferrer'
            target='_blank'
          >
            <FontAwesomeIcon className='icon li' icon={faLinkedin} />
          </a>
          <a
            href='https://github.com/Ramachandran-2524'
            className='icon-holder'
            rel='noreferrer'
            target='_blank'
          >
            <FontAwesomeIcon className='icon gh' icon={faGithub} />
          </a>
        </div>
        <div className='img text-center'>
          {/*  <img src={about} alt="devImg" /> */}
          <button className='btn resume'>
            <DownloadLink src={resume}>Download Cv</DownloadLink>
          </button>
        </div>
      </motion.header>
    </div>
  );
};

export default HomePage;
