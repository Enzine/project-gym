import React, { Component } from 'react';
import { login, saveData } from './util.js';
import { Redirect } from 'react-router-dom';


export default class Login extends Component {

  constructor(props) {
    super(props);


    this.handleSubmit = this.handleSubmit.bind(this);


    this.state = {
      loggedIn: false,
      errors: undefined
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    
    let name = this.refs.name.value;
    let password = this.refs.password.value;

    login(name, password).then((response) => {
      let token = response.data.token;
      saveData(name, token);

      this.setState({
        loggedIn: true
      });

    })
    .catch((error) => {
      console.log(error.response);
      let errorDescription = error.response.data.errors;


      this.setState({
        errors: errorDescription
      });
    });

  }

  render() {
    return (
      <div className="container grid-480">
        
        { this.state.loggedIn &&
          <Redirect to="/" push />
        }

        <h1>Login</h1>

        { this.state.errors &&
          <div className="errors">
            <p> Invalid username or password </p>
          </div>
        }

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