import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import UpdateProject from './components/Project/UpdateProject';
import AddProject from './components/Project/AddProject';
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addProject" component={AddProject} />
          <Route exact path="/updateProject/:id" component={UpdateProject} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;