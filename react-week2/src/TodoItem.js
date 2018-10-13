import React, { Component } from 'react';

class TodoOpject extends Component{
    render(){
        const todos= this.props.todos
        const checkTodoItem= this.props.checkTodoItem
        const deleteTodoItem= this.props.deleteTodoItem
        
        return(
            <div className="todo-item">         
                <input type="checkbox"  checked={todos.done} onChange={()=>{checkTodoItem(todos.id)}} />
                <div className={todos.done? "completed":"notDone"}>{todos.description}
                    <span className="deadline">{todos.deadline}
                    </span>
                </div>
                <button
                    onClick={()=>{deleteTodoItem(todos.id)}}>
                    Delete
                </button>
            </div>
        )
    }                                                                  
}
 
 class TodoItem extends Component{
    render(){
        const todoItem=this.props.filterItems.map((todos,repoID)=>{
            return(
                <TodoOpject
                    key={repoID}
                    todos={todos} 
                    checkTodoItem={this.props.checkTodoItem}
                    deleteTodoItem={this.props.deleteTodoItem}
                /> 
            )
        })
        return(
            <div>
                {todoItem}
            </div>
        )
    }

 }
  
 export default TodoItem;