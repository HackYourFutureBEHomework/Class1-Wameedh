import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoData from './TodoData.json';
import TodoItem from './TodoItem.js';

class App extends Component {
  constructor(props){
      super(props);
      this.state={
        Data:TodoData,
        searchString : '',
        filter: 'all',
        idTodoItem :3,
      }
    }
    todoInput = React.createRef();

       

// (Add Item)
    addTodo = event => {
      if (event.key === 'Enter'){
        const todoInput = this.todoInput.current.value;
        if (todoInput.trim().length ===0){
          return;
        }console.log(todoInput);
        this.setState((prevState, props)=>{
          let TodoData = prevState.Data;
          let idTodoItem = prevState.idTodoItem + 1;
          console.log(TodoData);
          TodoData.push({
            id: idTodoItem,
            description: todoInput,
            done : false,
          });console.log(TodoData.id);
          return { TodoData , idTodoItem, };
        });
        this.todoInput.current.value= '';
      }
    }

// (Completed Item)
    checkTodoItem=(repoID)=>{
      const newChangedTodo=this.state.Data.map((item)=>{
        if(repoID===item.id)
        item.done=!item.done
        return item
      })
      this.setState({
        Data:newChangedTodo
      })
    }
 
 // (Delete item)
    deleteTodoItem=(repoID)=>{
      const filteredList=this.state.Data.filter((item)=>{
        return item.id !== repoID
      })
      this.setState({
        Data:filteredList
      })
    }

// (Search Bar)  
    searchItem = (event) => {
      const searchString = event.target.value
      this.setState({searchString : searchString})
    }
  
// (Remainig Item)
    remainig = () => {
      return this.state.Data.filter(TodoData => !TodoData.done).length;
    }
    anyRemaining = () => {
      return this.remainig() !== 0;
    }

  // Clear Completed (bottom)
    todosCompletedCount = ()=> {
      return this.state.Data.filter(todo => todo.done).length;
    }

// (Clear Completed))
    clearCompeleted = () => {
      this.setState((prevState) => {
        return {
          Data: prevState.Data.filter(Data => !Data.done)
        };
      });
    }
    updateFilter = filter => {
      this.setState({filter})
    }

// (Check All Todos)
    checkAllTodos = (event) => {
      event.persist();
      this.setState((prevState, props) => {
        let checkAllItems = prevState.Data;
        console.log('running');
        checkAllItems.forEach((todo) => todo.done = event.target.checked);
        return {checkAllItems};
      });
    }

    render(){
      const filterItems = this.state.Data.filter((repo) => {
        const regex = new RegExp(this.state.searchString, 'g')
        return regex.test(repo.description)
      })



    return (
      <div className='App'>
        <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
        </header>
          <div className='Todo-container'>  
             <h1 className='text-logo'>
               Todo List 
             </h1>
                <div class="input-container">
                  <input type='text' className='todo-input' placeholder='What needs to be done' ref={this.todoInput} onKeyUp={this.addTodo}
                  />
                  <input type='text'className='todo-input' placeholder='Search todo items' onChange={this.searchItem}
                  />
                </div>
            <TodoItem filterItems={filterItems} checkTodoItem={this.checkTodoItem} deleteTodoItem={this.deleteTodoItem}
            />
             <div className='extra-container'>
                <div>
                    <div>
                      <label>
                        <input type='checkbox' checked={!this.anyRemaining()} onChange={this.checkAllTodos}
                        />
                        Check All
                        </label>
                    </div> 
                </div>
                <div >Item left: {this.remainig()}
                </div>
             </div>
             <div className='extra-container'>
                <button onClick={this.clearCompeleted}>
                Clear Completed
                </button>
             </div>
         </div>   
     </div>
      );
    }
}

export default App;