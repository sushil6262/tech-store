import React from 'react';
import styled from'styled-components';
import {Link} from 'react-router-dom';
import { ProductConsumer } from "../context";
import {FaSearch,FaCartPlus} from 'react-icons/fa';

const Product = ({product}) => {
    return (
        <ProductConsumer>
            {value=>{
                const {addToCart,setSingleProduct} = value;
                return (
                    <ProductWrapper className="col-10 mx-auto col-sm-8 colmd-6 col-lg-4 my-3">
                    <div className="card">
                        <div className="img-container">
                        <img src={product.image} style={{height:"300px"}} className="card-img-top p-5" alt="product"/>
                        <div className="product-icon">
                            <Link to={`/products/${product.id}`} onClick={()=> setSingleProduct(product.id)}>
                                <FaSearch className="icon"/>
                            </Link>
                            <FaCartPlus className="icon" onClick={()=>addToCart(product.id)}/>
                        </div>
                        </div>
                    </div>
                    </ProductWrapper>
                ) 
            }}
        </ProductConsumer>
    );
};

const ProductWrapper= styled.div`


`;

export default Product;