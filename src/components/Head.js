import React, { Component } from 'react'



export class Head extends Component {
    render() {
        return (
            <div class="alert alert-danger" role="alert">
            <h4 class="alert-heading">To Do App</h4>
            <p>Features : After completed todo , user cant edit item and can't be a pending todo again</p>
            <p>Features : Pending todos and Completed todos also can  delete   </p>
            <p>Features : Completed Todo placed in Bottom of the list and Newly added item placed in top of the list  </p>
            <hr></hr>
            <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
          </div>
        );
    }
}

export default Head;
