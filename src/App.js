import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import About from './pages/AboutPage';
import Home from './pages/HomePage';
import Contact from './pages/ContactPage';
import Default from './pages/DefaultPage';
import Product from './pages/ProductPage';
import SingleProduct from './pages/SingleProductPage';
import Cart from './pages/CartPage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SideCart from './components/SideCart';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar/>
      <Sidebar/>
      <SideCart/>
      <Switch>
        <Route exact  path="/"  component={Home}/>
        <Route path="/about"  component={About}/>
        <Route path="/contact"  component={Contact}/>
        <Route exact  path="/products"  component={Product}/>
        <Route path="/products/:id"  component={SingleProduct}/>
        <Route exact path="/cart"  component={Cart}/>
        <Route component={Default}/>
      </Switch>
      <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
