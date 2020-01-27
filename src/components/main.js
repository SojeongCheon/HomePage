import React from 'react';
import Home from './homepage';
import Me from './mepage'
import Skills from './skillspage'
import Projects from './projectspage'
import Contact from './contactpage'

import {Switch, Route} from 'react-router-dom';



const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/me" component={Me} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
    </Switch>
)

export default Main;