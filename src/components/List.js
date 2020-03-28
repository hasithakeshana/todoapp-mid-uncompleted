import React, { Component } from 'react'

import TodoItem from './Item';

export default class TodoList extends Component {
    render() {

        const {items,handleDelete,handleEdit,handleCompleted} = this.props;

        return (
          <ul className="list-group my-5">
              <h3 className = "text-center">  <font color="#000000 black">TODO LIST</font>   </h3>    
              <p><a href="#" class="text-danger">Note : To complete an item , add a tic to the checkbox(completed items cannot edit)</a></p>     
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
