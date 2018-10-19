

import React, { Component } from 'react';
import EditableLabel from "react-inline-editing";

class TodoOpject extends Component{
    render(){
        const todos= this.props.todos
        const checkTodoItem= this.props.checkTodoItem
        const deleteTodoItem= this.props.deleteTodoItem 
   
        return(
            <div className="todo-item">
{/* Checkbox Todo */}        
                <input type="checkbox"  checked={todos.done} onChange={()=>{checkTodoItem(todos.id)}} />
{/* Edit item */}
        {/* Also Thanks Eduardo for edit-package :) */}
                    <EditableLabel
                        text={todos.description + ", " + todos.deadline}
                        labelClassName={todos.done ? "checked" : "NotChecked"}
                        inputClassName="myInputClass"
                        inputWidth="300px"
                        inputHeight="25px"
                        labelFontWeight="bold"
                        inputFontWeight="bold"
                        onFocus={this.handleFocus}
                        onFocusOut={this.handleFocusOut}
                    />        
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
                    editTodo={this.props.editTodo}
                    doneEdit={this.props.doneEdit}
                    cancelEdit={this.props.cancelEdit}
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
