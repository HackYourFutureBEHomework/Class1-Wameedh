import React, { Component } from "react";
import { connect } from "react-redux";
import { setTodoStatus } from "../actions/todoAction";

class TodoStatus extends Component {
  statusChange = id => {
    this.props.todoStatus(id);
  };
  render() {
    const todo = this.props.todo;
    return (
      <input
        type="checkbox"
        onChange={() => this.statusChange(this.props.todo.id)}
        id={todo.id}
        checked={todo.done ? "checked" : ""}
      />
    );
  }
}
const mapDispatchToProps = dispatch => ({
  todoStatus: id => dispatch(setTodoStatus(id))
});
export default connect(
  null,
  mapDispatchToProps
)(TodoStatus);