import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Details from './component/Details';
import Cart from './component/Cart';
import Default from './component/Default';


class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact  path="/"  component={ProductList}/>
        <Route exact  path="/details"  component={Details}/>
        <Route exact  path="/cart"  component={Cart}/>
        <Route component={Default}/>
      </Switch>
      </React.Fragment>
    );
  }
}

export default App;
