import React from 'react';

import 'bootswatch/dist/materia/bootstrap.css'
import Card from '../componets/card'
import FormGroup from '../componets/form-group'
class TaskResgister extends React.Component{

    state ={
        title:'',
        description:''
    }

    register = () => {
        console.log(this.state)
    }

    render(){
        return(

            <div className="container">
                <Card title="Task Register">
                <div className="row">
                     <div className="col-lg-12">
                         <div className="bs-component">
                             <FormGroup label="Title: *" htmlFor="inputTitle">
                                 <input type="text"
                                        id="inputTitle"
                                        className="form-control"
                                        name="title"
                                        onChange={e => this.setState({title: e.target.value})} />
                             </FormGroup>

                             <FormGroup label="Description: *" htmlFor="inputDescription">
                                 <textarea type="text"
                                        id="inputDescription"
                                        className="form-control"
                                        name="description"
                                        onChange={e => this.setState({description: e.target.value})} />
                             </FormGroup>

                             <button onClick = {this.register} type="button" className="btn btn-primary">Save</button>
                             <button type="button" className="btn btn-danger">Cancel</button>

                         </div>
                     </div>             
                </div>

                </Card>
            </div>
           
        )
    }
}

export default TaskResgister;