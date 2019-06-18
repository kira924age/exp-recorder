import React, { Component } from 'react'
import './App.css';
import ResponsiveDrawer from './ResponsiveDrawer'
import axios from 'axios';

class ViewRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  buttonRecord() {
    axios
    .get("http://kira924age.com:8080/api/money_record/", )
    .then((results) => {
      this.setState({ data: results.data});
      console.log(this.state.data);
    },
    )
    .catch(() => {
      console.log('通信に失敗しました。');
    });
  }

  record() {
    return (
      <div>
      <input
        type="button"
        value="GetRecord"
        onClick={() => this.buttonRecord()}
      />
      <ul>
        { this.state.data.map( d =>
          <li key={d.id}>{d.id} : {d.name} </li>
        ) }
      </ul>
      </div>
    );
  }

  render() {
    return (
      <ResponsiveDrawer element= { this.record() } />
    );
  }
}

export default ViewRecord;

