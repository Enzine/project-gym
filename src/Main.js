import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Workouts from './components/Workouts';
import AddWorkout from './components/AddWorkout';

export default class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route exact path='/workouts' component={Workouts} />
          <Route exact path='/workouts/new' component={ AddWorkout } />
        </Switch>
      </main>
    );
  }
}