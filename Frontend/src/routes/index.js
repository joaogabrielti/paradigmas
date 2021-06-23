import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../views/home'
import Project from '../views/projects'
import Create from '../views/create'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/project" exact component={Project}/>
                <Route path="/create/:id" exact component={Create}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes