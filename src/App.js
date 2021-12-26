import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { US_STATES } from './data/usStates';
import './styles/main.css';
import UnitedStates from './components/UnitedStates';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

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
      <BrowserRouter>
        <div className="container">
          <Header states={usStates} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/us-states"
              render={() => <UnitedStates states={this.state.usStates} />}
            />
            <Redirect to="/" />
          </Switch>
          <Footer states={usStates} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
