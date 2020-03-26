import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {

        const {title,handleDelete,handleEdit,handleCompleted,isCompleted} = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">


            {
                isCompleted ? <del>{title}</del> :  <h6 >{title}</h6>
            }
            
            
            <div className="todo-icon">
              {
                  isCompleted ? <span className="mx-2 text-danger" >
                  <i className="fas fa-pen"></i>
                  </span>  :  <span className="mx-2 text-success" onClick={handleEdit}>
                  <i className="fas fa-pen"></i>
                  </span>
            }
                
          


            <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
            </span>

            <input type="checkbox" aria-label="Checkbox for following text input" onChange={handleCompleted}
            
            
            ></input>



            </div>
            </li>
        )
    }
}
