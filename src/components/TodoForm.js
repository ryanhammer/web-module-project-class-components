import React from "react";

class TodoForm extends React.Component {
  // Constructor with state handling form input
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  handleChanges = e => {
    // update state with each keystroke of form input field
    this.setState({
      input: e.target.value
    });
  };

  // class property to handle form submissions
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.input);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input onChange={ this.handleChanges } type="text" name="item" />
        <button className='add-task'>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;