import React from 'react';
import ContactSection from '../components/ContactSection';
import phone from '../images/phone.svg';
import email from '../images/emailme.svg';
import location from '../images/location.svg';
import Tittle from '../components/Title';
import { motion } from 'framer-motion';
import { routeFade } from '../utils/animation';

const ContactPage = () => {
  return (
    <motion.div variants={routeFade} initial='initial' animate='animate'>
      <Tittle className='title' title={'Contact Me'} span={'Contact Me'} />

      <div className='ContactPage'>
        <div className='map-sect'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62506.83531823401!2d78.05679952736378!3d11.717259516033584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1618026078459!5m2!1sen!2sin'
            width='400'
            height='400'
            style={{ border: '0' }}
            allowfullscreen
            loading='lazy'
            title={'CurrentLocation'}
          />
        </div>

        <div className='contact-sect'>
          <ContactSection
            icon={phone}
            text1={'+91 95661 41662'}
            title={'Phone & WhatsApp'}
          />
          <ContactSection
            icon={email}
            email={'svel936@gmail.com'}
            title={'Email'}
          />
          <ContactSection
            icon={location}
            text1={'49/23, 2nd street, Newwashermenpet'}
            text2={'chennai- 600081'}
            title={'Tamil Nadu, India'}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
