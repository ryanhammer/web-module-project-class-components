import React from "react";

const TodoForm = (props) => {
    return (
      <form onSubmit={ props.handleSubmit }>
        <input onChange={ props.handleChanges } type="text" name="item" />
        <button className='add-task'>Add Task</button>
      </form>
    );
}

export default TodoForm;