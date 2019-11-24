import React from 'react'
import { Route, Switch, HashRouter, Redirect} from 'react-router-dom'
import Home from '../views/home'
import TaskRegister from '../views/task/taskRegister'
import NotFoundPage from '../views/notFoundPage'
function Routes(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/home" component={Home}/>
                <Route path="/taskResgister" component={TaskRegister}/>
                <Route path="*" component={NotFoundPage} />
                <Route path="/404" component={NotFoundPage} />
                    <Redirect to="/404" />
            </Switch>
        </HashRouter>
    )
}

export default Routes;