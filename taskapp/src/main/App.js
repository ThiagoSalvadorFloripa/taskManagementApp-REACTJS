import React from 'react';
import 'bootswatch/dist/materia/bootstrap.css'

import Routes from '../main/routes'
import Nav from '../componets/nav'

class App extends React.Component {
  render(){
    return(
      <>
      <Nav/>
      <div>
        <Routes/>
      </div>
      
      </>
    )
  }
}



export default App;
