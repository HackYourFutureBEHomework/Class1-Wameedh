 import React, { Component } from 'react';
 import delete_sweep from './icon/delete_sweep.svg';
 import dcreate from './icon/create.svg';
 import clear from './icon/clear.svg';
 import done from './icon/done.svg';

 
class TodoOpject extends Component{
    constructor(props){
        super(props)
        this.state={
            editing:false,
            editTodoItem:this.props.todos.description
        }
    }
    ChangeTodoItem(){
        this.setState({
            editing:!this.state.editing
        })
    }
    editingChange(event){
        const newtext=event.target.value
        this.setState({
            editTodoItem:newtext
        })
    }
    editingDone(event){
        if(event.keyCode==='')
        this.setState({
            editing:false
        })
    }
    cancelEditing(){
        this.setState({
            editing:!this.state.editing,
            editTodoItem:this.props.todos.description
        })

    }

    render(){
        const Data= this.props.todos
        const checkTodoItem= this.props.checkTodoItem
        const deleteTodoItem= this.props.deleteTodoItem

        const TodoItem=(        
            <div className="todo-item">         
                <input
                     type="checkbox"
                     checked={Data.done} 
                     onChange={()=>{checkTodoItem(Data.id)}} 
                />
                <div
                    onDoubleClick={this.ChangeTodoItem.bind(this)}
                    className={Data.done? "completed":"notDone"}
                >
                 {this.state.editTodoItem}                
                    <span 
                        className="deadline"
                    >
                        {Data.deadline}
                    </span>
                </div>
                <img
                    src={dcreate} 
                    className='icon-logo'
                    alt='create'
                    onClick={()=>{this.ChangeTodoItem(Data.id)}}
                />
                <img
                    src={clear} 
                    className='icon-logo'
                    alt='delete'
                    onClick={()=>{deleteTodoItem(Data.id)}}
                />
            </div>
        )
        const EditingItemsTodo=(
            <div className="todo-item">            
               <input
                    type="text" 
                    value={this.state.editTodoItem} 
                    onKeyDown={this.editingDone.bind(this)}
                    onChange={this.editingChange.bind(this)}
                    className="Editing"
                >
               </input>
                <img
                    src={delete_sweep} 
                    className='icon-logo'
                    alt='Cancel'
                    onClick={()=>{this.cancelEditing()}}
                />
                 <img
                    src={done} 
                    className='icon-logo'
                    alt='done'
                    onClick={()=>{this.ChangeTodoItem()}}
                />
            </div>
        )
        return (this.state.editing ? EditingItemsTodo : TodoItem)
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
