import React, { Component } from 'react';
import { register } from './util.js';

export default class Register extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let name = this.refs.name.value;
    let password = this.refs.password.value;
    let passwordConfirm = this.refs.passwordConfirm.value;

    register(name, password, passwordConfirm);
    
  }

  render() {
    return (
      <div className="container grid-480">
        <h1>Register</h1>
        <div className="columns">
          <div className="column column-centered">
          <form onSubmit={this.handleSubmit} >
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input ref="name" className="form-input" type="text" name="name" id="name" placeholder="John" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input ref="password" className="form-input" type="password" name="password" id="password" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password_confirmation">Confirm password</label>
              <input ref="passwordConfirm" className="form-input" type="password" name="password_confirmation" id="password_confirmation" />
            </div>
            
            <input className="btn" type="submit" value="Submit" />
          </form>       
          </div>
        </div>
      </div>
    );
  }
}