import React, {Component} from 'react';
import './projectspage.css'
import image from './resources/project.jpg';

class Projects extends Component{
    render() {
        const style={
            backgroundImage: `url(${image})`
        }
        return(
            <div className = "ProjectPage">
                <div style={style} className = "ProjectEntry"></div>
                <div style={style} className = "ProjectEntry"></div>
                <div style={style} className = "ProjectEntry"></div>
                <div style={style} className = "ProjectEntry"></div>
                <div style={style} className = "ProjectEntry"></div>
                <div style={style} className = "ProjectEntry"></div>
                <div style={style} className = "ProjectEntry"></div>
                <div style={style} className = "ProjectEntry"></div>
                <div style={style} className = "ProjectEntry"></div>
                <div style={style} className = "ProjectEntry"></div>
                <div style={style} className = "ProjectEntry"></div>
                <div style={style} className = "ProjectEntry"></div>
                <div style={style} className = "ProjectEntry"></div>
                <div style={style} className = "ProjectEntry"></div>

            </div>
        )
    }
}

export default Projects;