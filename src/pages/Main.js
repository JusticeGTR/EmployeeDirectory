import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import Search from "../components/Search";
import TableHeader from "../components/TableHeader"
import EmpTable from "../components/EmpTable"

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
    console.log("input change!!")
    const value = event.target.value;
    if (value === "") {
      this.setState({
        searchQuery: ""
      })
    }
    const filteredEmployees = this.state.employees.filter(employee => employee.name.last.toLowerCase().includes(value.toLowerCase()) || employee.name.first.toLowerCase().includes(value.toLowerCase()))
    console.log(event.target.value);
    this.setState({
      searchQuery: filteredEmployees
    });
  };

// const sortNames



  render() {
    console.log("search component rendered!")
    console.log(this.state.employees)
    console.log(this.state.searchQuery)
    return (
      <>
        <Header />
        <Search handleInputChange={this.handleInputChange} />
        <table className="table">
          <TableHeader />
          <tbody>
            {(this.state.searchQuery.length > 0) ? this.state.searchQuery.map((employee, index) => {
              return (
                <EmpTable
                  key={index}
                  image={employee.picture.thumbnail}
                  name={`${employee.name.first} ${employee.name.last}`}
                  phone={employee.phone}
                  email={employee.email}
                  dob={employee.dob.date}
                />
              )
            }) : <tr><td colSpan="5">No One here! Try using the Search bar to find an employee</td></tr>}
          </tbody>
        </table>
      </>
    );
  }
}

export default Main;
