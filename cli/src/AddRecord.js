import React, { Component } from 'react'
import ResponsiveDrawer from './ResponsiveDrawer'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

// todo: validation
class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameProduct: '',
      price: null,
      category: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    axios({
      method : "POST",
      url : "http://kira924age.com:8080/api/money_record/",
      headers: {
        'Content-Type': 'application/json'
      },
      data : JSON.stringify({
       name: this.state.nameProduct,
       price: parseFloat(this.state.price),
       category: this.state.category
      }),
    })
    .then((results) => {
      console.log(results);
    },
    )
    .catch(() => {
      console.log('通信に失敗しました。');
    });
    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          required
          label="Name"
          helperText="What did you buy?"
          fullWidth
          type="text"
          name="nameProduct"
          value={this.state.nameProduct}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />

        <br />
        <TextField
          required
          label="Price"
          helperText="How much?"
          fullWidth
          type="number"
          name="price"
          InputProps={{ inputProps: { min: 0 } }}
          margin="normal"
          value={this.state.price}
          onChange={this.handleChange}
        />
        <br />
        <TextField
          required
          label="Category"
          helperText="Enter Category"
          fullWidth
          type="text"
          name="category"
          value={this.state.category}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <br />

        <Button variant="contained" color="primary" type="submit" value="Submit" >
          Submit
        </Button>

      </form>
    );
  }
}

class AddRecord extends Component {
  render() {
    return (
      <div>
        <ResponsiveDrawer element={<InputForm />} />
      </div>
    );
  }
}

export default AddRecord;

