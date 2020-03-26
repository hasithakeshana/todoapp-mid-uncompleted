import React, { Component } from 'react'

import TodoItem from './TodoItem';

export default class TodoList extends Component {
    render() {

        const {items,clearList,handleDelete,handleEdit,handleCompleted,completedItem} = this.props;

        return (
          <ul className="list-group my-5">
              <h3 className = "text-capitalize text-center">todo list</h3>
              {


                items.map(item => {

                    return(

                        <TodoItem 
                        key={item.id} 
                        title={item.title}
                        isCompleted={item.completed}
                        handleDelete={() => handleDelete(item.id)} 
                        handleEdit={() => handleEdit(item.id)}
                        handleCompleted={() => handleCompleted(item.id)}
                        completedItem = {completedItem}>
                        
                        </TodoItem>
                    )
                })


              }


               

                <button type="button" className="btn btn-danger btn-block text-capitalize mt-5 "
                onClick={clearList}
                
                >clear List</button>









          </ul>
        )
    }
}
