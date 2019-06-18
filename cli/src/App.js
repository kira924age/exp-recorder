import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import ResponsiveDrawer from './ResponsiveDrawer'
import ViewRecord from './ViewRecord'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/resister' component={Resister} />
          <Route path='/record' component={ViewRecord} />
        </div>
      </BrowserRouter>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <ResponsiveDrawer element='You are in home!' />
    );
  }
}

class Resister extends Component {
  render() {
    return (
      <ResponsiveDrawer element='You are in resister!' />
    );
  }
}

export default App;

