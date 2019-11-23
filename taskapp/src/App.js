import React from 'react';
import 'bootswatch/dist/materia/bootstrap.css'

import TaskRegister from './views/taskRegister'
import Home from './views/home'
class App extends React.Component {
  render(){
    return(
      <div>
        <TaskRegister/>
      </div>
    )
  }
}



export default App;
