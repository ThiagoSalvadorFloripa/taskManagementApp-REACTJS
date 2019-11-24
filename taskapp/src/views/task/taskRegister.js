import React from 'react';

import 'bootswatch/dist/materia/bootstrap.css'
import FormGroup from '../../componets/form-group'
import {withRouter} from 'react-router-dom'
import Card from  '../../componets/card'

import TaskService from '../../service/taskService'

import {messageErro} from '../../componets/toastr'
import {messageSuccess} from '../../componets/toastr'


class TaskRegister extends React.Component{

    constructor(){
        super();
        this.service = new TaskService();
    }

    state ={
        id:null,
        title:'',
        description:'',
        status:true,
        dateCreated:null,
        dateChange:null,
        dateDeleted:null,
        atualizando: false
    }

    componentDidMount(){
        let param1 = this.props.location.pathname;
        let params = param1.substring(15);

        if(params>0){
            this.service
                .getTaskById(params)
                .then(response => {
                    this.setState( {...response.data, atualizando: true} )
                })
                .catch(erros => {
                    messageErro("Error find task")
                })
        }
    }

    updateTask = () => {
        const { id, title, description, status,dateCreated, dateChange, dateDeleted  } = this.state;

        const task = {  id, title, description, status, dateCreated, dateChange, dateDeleted };
        this.service
            .updateTask(task)
            .then(response => {
                this.props.history.push('/home')
                messageSuccess("Upadate successfully")
            }).catch(error => {
                messageErro("Error update task")
            })
    }

    validationTask(){
        const msgs = []

        if(!this.state.title){
            msgs.push('Title field is required')
        }

        if(!this.state.description){
            msgs.push('Description field is required')
        }

        return msgs;
    }

    register = () => {
        const msgs = this.validationTask();
         
        if(msgs && msgs.length > 0){
            msgs.forEach((msg, index) =>{
                messageErro(msg)
            });
            return false;
        }
        this.service.saveTask({
            title: this.state.title,
            description: this.state.description
        }).then(response =>{
            messageSuccess("Saved successfully")
           this.props.history.push('/home')
       }).catch(error => {
         messageErro("Error saving")
       })
    }

    goHome = () =>{
        this.props.history.push('/home')
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name] : value })
    }

    render(){
        return(
            <Card title={ this.state.atualizando ? 'Task Update'  : 'Task Register' }>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup label="Title: *" htmlFor="inputTitle">
                                    <input type="text"
                                            id="inputTitle"
                                            className="form-control"
                                            name="title"
                                            value={this.state.title}
                                            onChange={this.handleChange} />
                                </FormGroup>

                                <FormGroup label="Description: *" htmlFor="inputDescription">
                                    <textarea type="text"
                                            id="inputDescription"
                                            className="form-control"
                                            name="description"
                                            value={this.state.description}
                                            onChange={this.handleChange}  />
                                </FormGroup>

                                { this.state.atualizando ? 
                                    (
                                        <button onClick = {this.updateTask} 
                                                type="button" 
                                                className="btn btn-primary">
                                                Update
                                        </button>
                                        
                                    ) : (

                                        <button onClick = {this.register} 
                                                type="button" 
                                                className="btn btn-primary">
                                                Save    
                                        </button>
                                    )
                                }
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