import React, { Component } from "react";
import API from "../utils/API";
// import Table from "../components/Table"

class Search extends Component {
  state = {
    employees: [],
    searchQuery: "",
    // image: [],
    // name:"",
    // phone:"",
    // email: "",
    // DOB: ""

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

  
  // handleInputChange = event => {
  //   const value = event.target.value;
  //   console.log("employees selected", value);
  //   this.setState({
  //     searchQuery: value
  //   });
  // };
  
  // const employee = res.data.results.map(list => )
  
  //when I type a letter or series of letters, then filter the employees with names that include the letter(s) typed
  //const filteredEmployees = this.state.employees.filter(employee => employee.name.last.includes(this.state.searchQuery))

  render() {
    console.log("search component rendered!")
    console.log(this.state.employees)
    
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
          { (this.state.employees.length > 0) ? this.state.employees.map((employee, index) => {
           return (
            <tr key={index}>
              <td><img src={employee.picture.thumbnail} alt="employee picture"/></td>
              <td>{`${employee.name.first} ${employee.name.last}`}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.dob.date}</td>
            </tr>
            )
          }) : <tr><td colSpan="5">Loading...</td></tr> }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Search;
