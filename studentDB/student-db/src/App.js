import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./css/App.css";
import studentsDB from "./students.json"
import Students from "./Students";

let filteredStudents = new Array();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      filteredStudents: studentsDB,
      gender: "All Students",
   };
   this.filterStudents = this.filterStudents.bind(this)
  }

  filterStudents(genderFilter) {
    filteredStudents = [];
    if (genderFilter === "men") {
      studentsDB.forEach(student => {
        if (!student.name.split(" ")[0].endsWith("a")) {
          filteredStudents.push(student);
        }
      });
    } else if (genderFilter === "women") {
      studentsDB.forEach(student => {
        if (student.name.split(" ")[0].endsWith("a")) {
          filteredStudents.push(student);
        }
      });
    } else {
      studentsDB.forEach(student => {
        filteredStudents.push(student);
      });
    }

    this.setState( {
      gender: genderFilter,
      filteredStudents: filteredStudents
    });
  }

  render() {
    return (
      <>
        <div className="header">
          Students
        </div>
        <Router>
          <div className="router">
            <Link to="/" onClick={() => this.filterStudents("All Students")}>All Students</Link>
            <Link to="/men" onClick={() => this.filterStudents("men")}>Men</Link>
            <Link to="/women" onClick={() => this.filterStudents("women")}>Women</Link>
          </div>
          <Switch>
            <Route>
              <Students gender={this.state.gender} filteredStudents={this.state.filteredStudents} />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;