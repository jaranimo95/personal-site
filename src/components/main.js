import React from 'react';
import {Switch,Route} from 'react-router-dom';

import home from './home';
import Projects from './projects';


const Main = () => (
    <Switch>
        <Route exact path="/" component={home} />
        <Route path='/projects' component={Projects} />
    </Switch>
)

export default Main;