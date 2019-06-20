import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import ResponsiveDrawer from './ResponsiveDrawer'
import ViewRecord from './ViewRecord'
import AddRecord from './AddRecord'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/resister' component={AddRecord} />
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

export default App;

