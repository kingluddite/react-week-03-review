import React, { Component } from 'react';
import { US_STATES } from '../data/usStates';

export class UnitedStates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usStates: US_STATES,
    };
  }

  render() {
    return (
      <div>
        <h1>United States</h1>
        <ul>
          {this.state.usStates.map((s, index) => (
            <li key={index}>
              <strong>name:</strong> {s.name} - {s.code}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UnitedStates;
