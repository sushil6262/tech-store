import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Product extends Component {
    render() {
        return (
            <div>
                product from product list
                <NavLink to="/details">
                    detail page
                </NavLink>
            </div>
        );
    }
}

export default Product;