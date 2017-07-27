import React, { Component } from 'react';
import './App.css';
import './spectre.min.css';
import Register from './Register.js'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <nav className="navbar">
          <section className="navbar-section">
            <Link className="navbar-brand mr-10" to="/">Gym</Link>
            
          </section>
          <section className="navbar-section">
            <Link className="btn btn-link" to="/register">Register</Link>
          </section>
        </nav>
        <div>
          <Route path="/register" component={Register}/>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
