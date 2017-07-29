import React, { Component } from 'react';
import './App.css';
import './spectre.min.css';
import SideBar from './components/SideBar.js';
import { loggedIn } from './util.js';

import {
  Link
} from 'react-router-dom';

export default class Navbar extends Component {

  componentWillMount() {
    this.setState({
      loggedIn: loggedIn()
    });
  }
  
  render() {
    return (
        <div>
          <nav className="navbar">
            <section className="navbar-section">
              <Link className="navbar-brand mr-10" to="/">Gym</Link>
            </section> 
              <SideBar
                loggedIn={this.state.loggedIn}
              />
          </nav>
        </div>
    );
  }
}