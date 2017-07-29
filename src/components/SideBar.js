import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout.js';

export default class SideBar extends Component {

  render() {
    if (this.props.loggedIn) {
      return  (
        <section className="navbar-section">
          <p> Logged in as {this.props.loggedIn} </p>
          <Logout />
        </section>
      );
    }
    return (
      <section className="navbar-section">
        <Link className="btn btn-link" to="/login">Login</Link>
        <Link className="btn btn-link" to="/register">Register</Link>
      </section>
    );
  }


}