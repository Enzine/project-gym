import React, { Component } from 'react';
import { logout } from '../util.js';
import { Link } from 'react-router-dom';

export default class Logout extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);

    this.state = {
      clicked: false
    }
  }

  logout() {
    logout();
  }

  render() {
    return (
      <Link to="/" onClick={this.logout} className="btn btn-link"> Logout </Link>
    );
  }
}