import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {
        handleSubmit = (e) => {
            e.preventDefault();
    const description = this.getTodoTitle.value;
    const deadline = this.getDeadline.value;
    const data = {
        id: Date.now(),
        description,
        deadline,
        done: false,
        editing: false
    }
    this.props.dispatch({
        type: 'ADD_POST',
        data
    })
    this.getTodoTitle.value = '';
    this.getDeadline.value = '';
}
    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">
                    Create Todo List
                </h1>
                <form className="form"
                    onSubmit={this.handleSubmit} >
                    <input
                            required 
                            type="text" 
                            ref={(input) => this.getTodoTitle = input}
                            placeholder="What needs to be done?" 
                    />
                    <br />
                    <br />
                    <input 
                            required
                            type='date'  
                            ref={(input) => this.getDeadline = input}
                            placeholder='Add to Deadline' 
                    />
                    <br />
                    <br />
                    <button>
                        Add
                    </button>
                </form>
            </div>
        );
    }
}
export default connect()(PostForm);