import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import ViewRecord from './ViewRecord'
import AddRecord from './AddRecord'
import DetailRecord from './DetailRecord'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/resister' component={AddRecord} />
        <Route path='/record' component={ViewRecord} />
        <Route path='/detail/:id(\d+)' component={DetailRecord} />
      </BrowserRouter>
    );
  }
}

export default App;

