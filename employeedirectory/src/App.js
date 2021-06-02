import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./components/Index";
import Search from "./components/pages/Search";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Index />
          <Route exact path="/search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
