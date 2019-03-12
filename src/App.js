// Main  component
// Initial setup
  // - Added Bootstrap via npm
  // - Added Google Fonts
  // - Added Font Awesome

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>Hello from App</h3>
      </React.Fragment>
    );
  }
}

export default App;
