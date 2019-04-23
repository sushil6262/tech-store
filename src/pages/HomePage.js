import React from 'react';
import {ProductConsumer} from '../context'
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import Services from '../components/HomePage/Services';
import Featured from '../components/HomePage/Featured';

const HomePage = () => {
    return (
        <div>
            <Hero title="Awesome Gadget" max="true" >
                <Link to="/products"
                style={{margin:"2rem"}}
                className="main-link">our product</Link>
            </Hero>
            <Services/>
            <Featured/>
        </div>
    );
};

export default HomePage;