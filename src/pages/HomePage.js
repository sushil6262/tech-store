import React from 'react';
import {ProductConsumer} from '../context'
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <Hero title="Awesome Gadget" max="true" >
                <Link to="/products"
                style={{margin:"2rem"}}
                className="main-link">our product</Link>
            </Hero>
            
        </div>
    );
};

export default HomePage;