import React, { Component } from 'react'

export default class Inputs extends Component {
    render() {

        const {item,handleChange,handleSubmit,editItem} = this.props;

        return (
            <div className="card card-body my-3">             

               <form onSubmit={handleSubmit}>
                <div className = "input-group">
                <div className = "input-group-prepend">
                <div className = "input-group-text bg-primary text-white">
                <i className="far fa-check-circle"></i>      
                 </div>
                </div>
                <input type ="text" className="form-control " placeholder="add item" 
               
                value ={item}
                onChange={handleChange}
                ></input>
                </div>
                <button type="submit" className={
                    editItem ? "btn btn-block purple-gradient mt-3" : "btn blue-gradient btn-block  mt-3"

                }>
                    
                    {editItem ? "edit item" : "add item"}
                    
                    
                    
                    
                    </button>
               </form>
            </div>
        );
    }
}
