import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Register from './Register.js';
import Login from './Login.js';
import Home from './Home.js';
import Navbar from './Navbar.js';

export default class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </main>
    );
  }
}