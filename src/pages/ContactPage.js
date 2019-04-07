import React from 'react';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import contactBcg from '../images/contactBcg.jpeg';
import Contact from '../components/ContactPage/Contact';

const ContactPage = () => {
    return (
        <div>
        
            <Hero img={contactBcg}/>
            <Contact/>
        </div>
    );
};

export default ContactPage;