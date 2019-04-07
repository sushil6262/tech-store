import React from 'react';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import aboutBcg from '../images/aboutBcg.jpeg'
import Info from '../components/AboutPAge/Info'

const AboutPage = () => {
    return (
        <div>
        <Hero img={aboutBcg} />
        <Info/>
    
            
        </div>
    );
};

export default AboutPage;