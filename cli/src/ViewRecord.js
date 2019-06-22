import React, { Component } from 'react'
import ResponsiveDrawer from './ResponsiveDrawer'
import axios from 'axios';
import MaterialTable from 'material-table';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

class ShowMaterialTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Name', field: 'name' },
        { title: 'Price', field: 'price'},
        { title: 'Category', field: 'category'},
        { title: 'Detail', field: 'id'},
      ],
      data: [],
    }
  }
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    await axios
    .get("http://kira924age.com:8080/api/money_record/")
    .then((results) => {
      var data3 = [];
      var i = 0;
      for (var prop in results.data) {
        let value = results.data[prop];
        let uri = "/Detail/"+ value.id ;
        value = {
          "id" :
            <Link to={uri} >
              <SearchIcon />
            </Link>, 
          "name": value.name,
          "price": value.price,
          "category": value.category,
        }
        data3[i] = (value)
        i += 1;
      }
      this.setState( {data: data3 } );
    },)
    .catch( error => {
      console.log('axios error: ' + error.response );
    });
  };

  render() {
  return (
    <MaterialTable
      title="Record of expenses"
      columns={this.state.columns}
      data={this.state.data}
      options={{
        pageSize: 10,
        pageSizeOptions: [10, 30, 90],
        paginationType: "stepped",
      }}
    />
  );
  }
}

class ViewRecord extends Component {
  render() {
    return (
      <ResponsiveDrawer element={ <ShowMaterialTable /> } />
    );
  }
}

export default ViewRecord;

