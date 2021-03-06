import React, { Component } from 'react';
import {linkData} from './linkData'
import {socialData} from './socialData'
import {items} from './productData'
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state={
        sidebarOpen:false,
        cartOpen:false,
        links:linkData,
        cart:[],
        socialIcons:socialData,
        cartItems:0,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
        storeProducts:[],
        filteredProducts:[],
        singleProduct:{},
        loading:true,
        featuredProducts:[]
    }


    
    componentDidMount(){
        this.setProducts(items)
    }
    setProducts=(products)=>{
        let storeProducts = products.map(item=>{
            const {id} =item.sys;
            const image = item.fields.image.fields.file.url
            const product = {id,...item.fields,image};
            return product;
        });
        let featuredProducts = storeProducts.filter(item=>item.featured=== true);

        this.setState({
            storeProducts,
            filteredProducts:storeProducts,
            featuredProducts,
            cart:this.getStorageCart(),
            singleProduct:this.getStorageProduct(),
        })
    }

    getStorageCart=()=>{
        return [];
    }
    getStorageProduct=()=>{
        return [];
    }

    getTotals=()=>{

    }
    addTotals=()=>{

    }
    syncStorage=()=>{

    }

    addToCart=(id)=>{
        console.log(`add to cart ${id}`);
    }
    setSingleProduct=(id)=>{
        console.log(`set single product ${id}`);
    }
        handleSidebar=()=>{
        this.setState({
            sidebarOpen:!this.state.sidebarOpen
        })
    }
    handleCart=()=>{
        this.setState({
            cartOpen:!this.state.cartOpen
        })
    }

    closeCart=()=>{
        this.setState({cartOpen:false})
    }
    openCart=()=>{
        this.setState({cartOpen:true})
    }


    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleSidebar:this.handleSidebar,
                handleCart:this.handleCart,
                closeCart:this.closeCart,
                openCart:this.openCart,
                addToCart:this.addToCart,
                setSingleProduct:this.setSingleProduct,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )

    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };