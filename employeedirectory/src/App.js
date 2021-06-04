import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Main />
          <Route exact path="/search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
