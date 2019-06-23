import React, { Component } from 'react'
import ResponsiveDrawer from './ResponsiveDrawer'
import axios from 'axios';
import MaterialTable from 'material-table';

class ShowMaterialTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Name', field: 'name' },
        { title: 'Price', field: 'price'},
        { title: 'Category', field: 'category'},
        { title: 'Time', field: 'created_at'},
      ],
      data: [],
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    await axios
    .get("http://kira924age.com:8080/api/detail/"+this.props.id, )
    .then((results) => {
      this.setState( {data: [results.data] } );
    },)
    .catch( error => {
      console.log('axios error: ' + error.response );
    });
  };

  deleteData = async() => {
    await axios
    .delete("http://kira924age.com:8080/api/detail/"+this.props.id, )
    .then((results) => {
      this.setState( {data: [] } );
    },)
    .catch( error => {
      console.log('axios error: ' + error.response );
    });
  }

  editData = async() => {
    axios({
      method : "PUT",
      url : "http://kira924age.com:8080/api/detail/"+this.props.id,
      headers: {
        'Content-Type': 'application/json'
      },
      data: this.state.data[0],
    })
    .catch(() => {
      console.log('通信に失敗しました。');
    });
  }

  render() {
    return (
      <MaterialTable
        title="Detail of the expenses"
        columns={this.state.columns}
        data={this.state.data}
        options={{
          pageSize: 1,
          pageSizeOptions: [],
          search: false,
          paging: false,
          sorting: false,
        }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...this.state.data];
                data[data.indexOf(oldData)] = newData;
                this.setState({ ...this.state, data });
                this.editData();
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...this.state.data];
                data.splice(data.indexOf(oldData), 1);
                this.setState({ ...this.state, data });
                this.deleteData();
              }, 600);
            }),
        }}
      />
    );
  }
}

class DetailRecord extends Component {
  render() {
    const params = this.props.match
    const _id = params.params.id
    return (
      <div>
        <ResponsiveDrawer element={ <ShowMaterialTable id={_id} /> } />
      </div>
    );
  }
}

export default DetailRecord;

