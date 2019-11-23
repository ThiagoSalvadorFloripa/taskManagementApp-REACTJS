import React from 'react';
import 'bootswatch/dist/materia/bootstrap.css'

function FormGroup(props){
    return(
        <div className="form-group">
            <label htmlFor={props.htmlFor}>{props.label}</label>
            {props.children}
        </div>
    )
}

export default FormGroup;