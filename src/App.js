import React, {Component} from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Main from './components/main'
import { FaHome, FaRegLaughSquint, FaStickerMule, FaHorse, FaIdCard, FaRegFileCode, FaRegSun, FaYoutube, FaCommentDots, FaRegEnvelope } from "react-icons/fa"
import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
        <header className="ToolBar">
            <Link to = "/">
              <button className="HomeButton"><FaHome /></button>
            </Link>
            <Link to = "/me">
              <button className="MeButton"><FaHorse /></button>
            </Link>
            <Link to = "/skills">
              <button className="SkillsButton"><FaRegFileCode /></button>
            </Link>
            <Link to = "/projects">
              <button className="ProjectsButton"><FaYoutube /></button>
            </Link>
            <Link to = "/contact">
              <button className="ContactButton"><FaRegEnvelope /></button>
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