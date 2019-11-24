import React from 'react'
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'
import Home from '../views/home'
import TaskRegister from '../views/taskRegister'
function Routes(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/taskResgister" component={TaskRegister}/>
            </Switch>
        </HashRouter>
    )
}

export default Routes;