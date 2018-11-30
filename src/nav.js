import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
    <div class="nav">

   

        <Link to={this.props.site}>{this.props.name}</Link>

    </div>
    );
  }
}

export default Nav;
