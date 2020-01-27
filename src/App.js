import React, {Component} from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Main from './components/main'
import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
        <header className="ToolBar">
            <Link to = "/">
              <button className="HomeButton">Home</button>
            </Link>
            <Link to = "/me">
              <button className="MeButton">Me</button>
            </Link>
            <Link to = "/skills">
              <button className="SkillsButton">Skills</button>
            </Link>
            <Link to = "/projects">
              <button className="ProjectsButton">Projects</button>
            </Link>
            <Link to = "/contact">
              <button className="ContactButton">Contact</button>
            </Link>
        </header>
        <div className="PageContents">
          <Main/>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;