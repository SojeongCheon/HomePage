import React, {Component} from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Main from './components/main'
import { FaHome, FaRegLaughSquint, FaStickerMule, FaHorse, FaRegGrinSquint, FaRegFileCode, FaRegSun, FaRegEnvelope } from "react-icons/fa"
import { AiOutlineHome, AiOutlineBulb,  } from "react-icons/ai";
import { MdInsertEmoticon } from "react-icons/md";
import './App.css';
import Button from './Button';

// 악악악!!!아아아ㅏ아악!!! main page 거지같어!!!!!
// 글자 넣는 방법 h1,2,3... p...?
// page 변형될 때 글자 이상하게 됨
// button 클릭 했을 때 다른 기능 하게 하려면 막 상속 같은거 받아서 따로 만들어야 하는건가???
// 글고 link 이렇게 넣는게 최선인것인가....????
// scroll 짱나는데.... 가로 스크롤은 없애교... 툴바는 스크롤 내리면 밑에 안습ㅋㅋㅋㅋㅋ
// https://react-icons.github.io/react-icons 여기서 아이콘 따오는디?

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <header className="ToolBar">
              <Link to = "/">
                <Button className="HomeButton" icon = {<AiOutlineHome />}/>
              </Link>
              <Link to = "/me">
                <Button className="MeButton" icon = {<FaRegGrinSquint />}/>
              </Link>
              <Link to = "/skills">
                <Button className="SkillsButton" icon = {<FaRegFileCode />}/>
              </Link>
              <Link to = "/projects">
                <Button className="ProjectsButton" icon = {<AiOutlineBulb />}/>
              </Link>
              <Link to = "/contact">
                <Button className="ContactButton" icon = {<FaRegEnvelope />}/>
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