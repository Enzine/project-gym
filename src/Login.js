import React, { Component } from 'react';

export default class Login extends Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
  }

  render() {
    return (
      <div className="container grid-480">
        <h1>Login</h1>
        <div className="columns">
          <div className="column column-centered">
          <form onSubmit={this.handleSubmit} >
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input ref="name" className="form-input" type="text" name="name" id="name" placeholder="Username" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input ref="password" className="form-input" type="password" name="password" id="password" placeholder="Password" />
            </div>
            
            <input className="btn" type="submit" value="Login" />
          </form>       
          </div>
        </div>
      </div>
    );
  }
}