import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <TodoList />
      </div>
    );
  }
}

export default App;
