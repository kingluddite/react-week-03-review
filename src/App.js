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
    const { usStates } = this.state;
    return (
      <div className="container">
        <Header states={usStates} />
        <UnitedStates states={usStates} />
        <Footer states={usStates} />
      </div>
    );
  }
}

export default App;
