import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Workout from './Workout';

export default class Workouts extends Component {

  render() {
    return (
      <div>
        <h1> Your Workouts </h1>
        <Link className="btn" to="/workouts/new">Add Workout</Link>
        
      </div>
    );
  }
}