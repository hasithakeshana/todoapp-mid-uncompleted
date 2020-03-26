import React , {Component} from 'react';

import Input from './components/Inputs';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
//import uuid from "uuid";
import { v4 as uuidv4 } from 'uuid';

class App extends Component{

  state={

    items : [],
    id:uuidv4(),
    item: '',
    editItem:false,
    completedItem:false
  }

  handleChange = (e) =>{
    this.setState({

      item : e.target.value
    });

  };

  handleSubmit = (e) => {

    e.preventDefault();

    const newItem = {
      id : this.state.id,
      title:this.state.item,
      completed:false
    }


//     let cats = ['Bob'];

// cats.unshift('Willy'); // ['Willy', 'Bob']

// cats.unshift('Puff', 'George'); // ['Puff', 'George', 'Willy', 'Bob']

const update = this.state.items;
 update.unshift(newItem);

   // const updateArray = [...this.state.items,newItem]; // newArray

    this.setState({
      items : update,
      item : '',
      id:uuidv4(),
      editItem:false
    })

   console.log(this.state);
  };

  clearList = ()=>{
    this.setState({
      items:[]
    })
  }

  handleDelete = (id) => {

    const FilteredItems = this.state.items.filter(item => item.id !== id);

    this.setState({
      items : FilteredItems
    })
  }

  handleEdit = (id) => {


  //  console.log(id);

    const FilteredItems = this.state.items.filter(item => item.id !== id); // create new array (not include that item)

    const selectedItem = this.state.items.find(item => item.id === id)

  //  console.log(selectedItem);

  //  console.log('FilteredItems',FilteredItems);

    this.setState({
      items:FilteredItems,
      item:selectedItem.title,
      editItem:true,
      id:id
    });

    // id : id - in update  not update the id

  }

  handleCompleted = (id)=> {

    //console.log(id);

    // items arry 0 - id,title,completed=false

    // const { items } = this.state;
    // items[1].name = e.target.value;

    // // update state
    // this.setState({
    //     items,
    // });

    const selectedItem = this.state.items.find(item => item.id === id);

  //  console.log(selectedItem);

   const itemss = this.state.items;
   console.log('items',itemss);

  //  itemss.map(item => {
  //   if (item.id === selectedItem.id) {
      
  //     item.completed = true;
  //   } else {
  //     return itemss;
  //   })

    itemss.map(item => {
      if (item.id === selectedItem.id) {
        item.completed = true;
        return item;
      } else {
        return itemss;
      }
    });

    const selectedItem1 = itemss.find(item => item.id === id);

    console.log('itemssss',itemss);
    console.log('selectedItem1',selectedItem1);

    const FilteredItems = this.state.items.filter(item => item.id !== id);
    
    const latestArr =  FilteredItems;

    latestArr.push(selectedItem1);

    console.log('latestArr',latestArr);

    this.setState({
      items : latestArr
    })
  
   
  }

  render(){

   console.log(this.state);


    return (

      
   <div className="container">
     <div className="row">
       <div className="col-10 mx-auto col-md-8 mt-4">
      <h3 className = "text-capitalize text-center">to do input </h3>

       <Input 
       item={this.state.item}  
       handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        editItem={this.state.editItem}
        
        >
        
        </Input>
       <TodoList
        items={this.state.items}  
        clearList={this.clearList} 
        handleDelete={this.handleDelete}
        handleEdit = {this.handleEdit}
        handleCompleted = {this.handleCompleted}
        completedItem = {this.state.completedItem}
       
         ></TodoList>

       </div>


     </div>

   </div>
      );

  }
  
}

export default App;
