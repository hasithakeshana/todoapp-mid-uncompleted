import React, { Component } from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default class TodoItem extends Component {

   
    render() {

        const {title,handleDelete,handleEdit,handleCompleted,isCompleted} = this.props;
        return (
            
            <li className="list-group-item  d-flex justify-content-between my-2">


            {
                isCompleted ? <del>{title}</del> :  <h6 >{title}</h6>
            }
            
            
            <div className="todo-icon">
              {
                  isCompleted ? <span className="mx-2 text-danger" >
                 
                  </span>  :  <span className="mx-2 text-primary" onClick={handleEdit}>
                  <i className="far fa-edit "></i>
                  </span>
             }
              
          


            <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash"></i> 
            &nbsp;&nbsp;</span>


             {
                    isCompleted ?   <input type="checkbox" aria-label="Checkbox for following text input" onChange={handleCompleted} disabled="disabled"></input>
                    :  <input type="checkbox" aria-label="Checkbox for following text input" onChange={handleCompleted}></input>
                                                                                                                           
             }
          
            
            
        

            </div>

            <NotificationContainer/>
            </li>
        )
    }
}
