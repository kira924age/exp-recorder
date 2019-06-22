import React, { Component } from 'react'
import ResponsiveDrawer from './ResponsiveDrawer'


const element = (
  <div>
    Welcome to exp-recoder!
    <br /> 
    You can record data of expense.
    <h1> Hello </h1>
    <h2> Hello </h2>
    <h3> Hello </h3>
  </div>
);


class Home extends Component {
  render() {
    return (
      <div>
        <ResponsiveDrawer element={element} />
      </div>
    );
  }
}

export default Home;

