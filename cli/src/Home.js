import React, { Component } from 'react'
import ResponsiveDrawer from './ResponsiveDrawer'

const element = (
  <div>
    Welcome to exp-recoder!
    <br /> 
    You can record data of expense.
    <h2> Hello </h2>
  </div>
);


class Home extends Component {
  render() {
    return (
      <ResponsiveDrawer element={element} />
    );
  }
}

export default Home;

