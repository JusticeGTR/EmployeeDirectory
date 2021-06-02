import React, { Component } from "react";
import API from "../../utils/API";

class Search extends Component {
  state = {
    employees: [],
    searchQuery: "",
  }
  componentDidMount() {
    API.getEmployeeList().then(res => {
      console.log(res)
      this.setState({
        employees: res.data.results
      })
    })
  }

  handleInputChange = event => {
    const value = event.target.value;
    console.log("employees selected", value);
    this.setState({
      searchQuery: value
    });
  };


  render() {
    return (
      <div className="justify-content-center mx-auto">

        <input onChange={this.handleInputChange} placeholder="Search" />

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col-sm-2">Image</th>
              <th scope="col-sm-2">Name</th>
              <th scope="col-sm-3">Phone</th>
              <th scope="col-sm-3">Email</th>
              <th scope="col-sm-2">DOB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>test</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Search;
