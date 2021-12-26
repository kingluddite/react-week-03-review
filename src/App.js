import React, { Component } from 'react';
import { US_STATES } from './data/usStates';
import './styles/main.css';
import UnitedStates from './components/UnitedStates';
import Header from './components/Header';
import Footer from './components/Footer';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usStates: US_STATES,
    };
  }

  render() {
    return (
      <div className="container">
        <Header states={this.state.usStates} />
        <UnitedStates states={this.state.usStates} />
        <Footer states={this.state.usStates} />
      </div>
    );
  }
}

export default App;
