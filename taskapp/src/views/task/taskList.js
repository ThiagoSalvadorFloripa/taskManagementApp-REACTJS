import React from 'react'
export default props => {


    const  rows = props.tasks.map(task =>{
        
        return(
            <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.status = task.status ? "Active": "Inactive"}</td>
                <td>{task.dateCreated}</td>
                <td>{task.dateChange}</td>
                <td>{task.dateDeleted}</td>
                <td>
                    <button type="button" 
                            className="btn btn-outline-primary"
                            onClick={e => props.edtiAction(task.id)}>
                            Edit
                    </button>

                    <button type="button" 
                            className="btn btn-outline-danger"
                            onClick={e => props.deleteAction(task.id)}>
                            Disable
                    </button>
                </td>
            </tr> 
        )
    })
    const hStyle = { color: 'white' };

    return(
        <table className = "table table-hover">
            <thead>
                <tr className="bg-primary">
                    <th style={ hStyle } scope ="col">Title</th>
                    <th style={ hStyle } scope ="col">Description</th>
                    <th style={ hStyle } scope ="col">Status</th>
                    <th style={ hStyle } scope ="col">Date Created</th>
                    <th style={ hStyle } scope ="col">Date Change</th>
                    <th style={ hStyle } scope ="col">Date Deleted</th>
                    <th style={ hStyle } scope ="col">Actions</th>
                    
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>

        </table>
    )
}
