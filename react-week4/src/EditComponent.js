import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {
    handleCancel = id => {
        this.props.cancelEditTodo(id);
      };
    handleEdit = (e) => {
        e.preventDefault();
        const newTodoTitle = this.getTitle.value;
        const newDeadline = this.getDeadline.value;
        const data = {
            newTodoTitle,
            newDeadline
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }
    render() {
        return (
            <div key={this.props.post.id} className="post">
                <form className="form" onSubmit={this.handleEdit}>
                    <input 
                        required 
                        type="text" 
                        ref={(input) => this.getTitle = input}
                        defaultValue={this.props.post.description} 
                        placeholder="Enter Post Title"
                    />
                    <br />
                    <br />
                    <input 
                        required
                        type='date'  
                        ref={(input) => this.getDeadline = input}
                        defaultValue={this.props.post.deadline} 
                        placeholder='Add to Deadline' 
                                                     
                    />
                    <br />
                    <br />
                    <button>
                        Update
                    </button>
                     <br />
                    <br />
                    <button 
                    onClick={() => this.props.dispatch({ type: 'CANCEL', id: this.props.post.id })}
                    >
                        Cansel
                    </button>
                </form>
            </div>
        );
    }
}
export default connect()(EditComponent);