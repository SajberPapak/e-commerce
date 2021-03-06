// Main  component
// Initial setup
  // - Added Bootstrap via npm
  // - Added Google Fonts
  // - Added Font Awesome

// Components setup
  // App
  // Navbar
  // ProductList
    // Product
  // Details
  // Cart
  // Default

// Install React Router via npm: npm i --save react-router-dom
// {BrowserRouter, Switch, Route, Link}

import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Details from "./components/Details";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
