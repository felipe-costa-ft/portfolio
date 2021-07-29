import React from 'react';

import Navigator from './components/Navigator';
import Footer from './components/Footer'

import Home from './views/Home';
import Curriculum from './views/Curriculum';
import Projects from './views/Projects'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const App = props => {
    return (
        <Router>
            <Navigator />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/curriculum">
                    <Curriculum />
                </Route>
                <Route path="/projects" exact>
                    <Projects />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;