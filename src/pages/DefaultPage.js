import React from 'react';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import defaultBcg from '../images/defaultBcg.jpeg'

const DefaultPage = () => {
    return (
        <div>
        <Hero title="404" max="true" img={defaultBcg}>
        <h2 className="text-uppercase">Page Not Found</h2>
        <Link to="/"
        style={{margin:"2rem"}}
        className="main-link">Return Home</Link>
    </Hero>
        </div>
    );
};

export default DefaultPage;