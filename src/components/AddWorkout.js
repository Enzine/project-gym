import React, { Component } from 'react';
import InputMoment from 'input-moment';
import moment from 'moment';
import '../css/AddWorkout.css'
import "input-moment/dist/input-moment.css";


export default class AddWorkout extends Component {

  constructor(props) {
    super(props)

    this.state = {
      moment: moment().startOf('day')
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div className="container grid-480">
        <h1>Add new workout</h1>
        <form>
          <div className="form-group">
            <label className="form-label" htmlFor="description">Short description</label>
            <input className="form-input" type="text" id="description" placeholder="Short description" />
          </div>
          <div className="form-group">
            <InputMoment
              moment={this.state.moment}
              onChange={this.handleChange}
              onSave={this.handleSave}
              prevMonthIcon="ion-ios-arrow-left" // default
              nextMonthIcon="ion-ios-arrow-right" // default
            />
          </div>
        </form>

      </div>
    );
  }
}