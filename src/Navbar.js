import React, { Component } from 'react';
import './css/Navbar.css';
import './spectre.min.css';
import SideBar from './components/SideBar.js';
import { loggedIn } from './util.js';

import {
  NavLink
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
              <NavLink className="navbar-brand mr-10" to="/"> Gym </NavLink>
              <NavLink className="btn btn-link" to="/workouts"> Workouts </NavLink>
            </section> 
              <SideBar
                loggedIn={this.state.loggedIn}
              />
          </nav>
        </div>
    );
  }
}