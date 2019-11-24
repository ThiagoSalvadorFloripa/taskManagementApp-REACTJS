import React from 'react';

import 'bootswatch/dist/materia/bootstrap.css'
import FormGroup from '../componets/form-group'
import {withRouter} from 'react-router-dom'
import Card from  '../componets/card'

import TaskService from '../service/taskService'

class TaskRegister extends React.Component{

    constructor(){
        super();
        this.service = new TaskService();
    }

    state ={
        title:'',
        description:''
    }

    register = () => {
        this.service.saveTask({
            title: this.state.title,
            description: this.state.description
        }).then(response =>{
           console.log(response)
           this.props.history.push('/home')
       }).catch(error => {
           console.log(error.response)
       })
    }

    goHome = () =>{
        this.props.history.push('/home')
    }

    render(){
        return(
            <Card title="Task Register">
                <div className="container">
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
                                <button onClick = {this.goHome} type="button" className="btn btn-danger">Cancel</button>

                            </div>
                        </div>             
                    </div>
                </div>
            </Card>
           
        )
    }
}

export default withRouter(TaskRegister)