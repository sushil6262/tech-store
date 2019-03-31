import React from 'react';
import {ProductConsumer} from '../context'

const HomePage = () => {
    return (
        <div>
            <ProductConsumer>
            {value=>{
                return (
                    <h1>{value}</h1>
                )
            }}
            </ProductConsumer>
        </div>
    );
};

export default HomePage;