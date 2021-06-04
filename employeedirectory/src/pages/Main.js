import React, { Component } from "react";
import API from "../utils/API";
import moment from "moment";

class Main extends Component {
  state = {
    employees: [],
    searchQuery: ""
  }

  componentDidMount() {
    API.getEmployeeList().then(res => {
      // console.log(res)
      this.setState({
        employees: res.data.results
      })
    })
    // return employee;
  }


  handleInputChange = event => {
    const value = event.target.value;
    if(value === ""){
      this.setState({
        searchQuery: ""
      })
    }
    const filteredEmployees = this.state.employees.filter(employee => employee.name.last.toLowerCase().includes(value.toLowerCase()) || employee.name.first.toLowerCase().includes(value.toLowerCase()))
    console.log("employees selected", value);
    this.setState({
      searchQuery: filteredEmployees
    });
  };

  // const employee = res.data.results.map(list => )

  //when I type a letter or series of letters, then filter the employees with names that include the letter(s) typed



  render() {
    console.log("search component rendered!")
    console.log(this.state.employees)
    return (
      <>
        <div className="jumbotron jumbotron-fluid text-center bg-info border-bottom border-danger text-white">
          <div className="container">
            <h1 className="display-4">Employee Directory</h1>
            <p className="lead">Click on carrots to filter by heading or use the search box to narrow your results</p>
          </div>
        </div>

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
              {(this.state.searchQuery.length > 0) ? this.state.searchQuery.map((employee, index) => {
                return (
                  <tr key={index}>
                    <td><img src={employee.picture.thumbnail} alt="employee headshot" /></td>
                    <td>{`${employee.name.first} ${employee.name.last}`}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.email}</td>
                    <td>{moment(employee.dob.date).format('MM/DD/YYYY')}</td>
                  </tr>
                )
              }) : <tr><td colSpan="5">No One here! Try using the Search bar to find an employee</td></tr>}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Main;
