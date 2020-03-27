import React, { Component } from 'react'

import TodoItem from './Item';

export default class TodoList extends Component {
    render() {

        const {items,handleDelete,handleEdit,handleCompleted} = this.props;

        return (
          <ul className="list-group my-5">
              <h3 className = "text-center">  <font color="#6a1b9a purple darken-3">TODO LIST</font>   </h3>         
              {


                items.map(item => {

                    return(

                        <TodoItem 
                        key={item.id} 
                        title={item.title}
                        isCompleted={item.completed}
                        handleDelete={() => handleDelete(item.id)} 
                        handleEdit={() => handleEdit(item.id)}
                        handleCompleted={() => handleCompleted(item.id)}>
                        
                        </TodoItem>
                    )
                })


              }


               

              








          </ul>
        )
    }
}
