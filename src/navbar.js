import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import Nav from './nav.js';


class Navbar extends Component {
  render() {
    return (
    
        <div id="nav-bar">

        <div className="logotext">Adam Roe</div>

        <Nav site="/" name="About" />
        <Nav site="/projects" name="Projects" />

        
        
        </div>



    );
  }
}

export default Navbar;
