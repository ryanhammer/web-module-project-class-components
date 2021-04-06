import React from "react";

import Task from "./Task";

const TodoList = props => {

  return (
    <div className="to-do-list">
      {props.tasks.map(task => (
        <Task toggleTask = { props.toggleTask } key={task.id} task={task} />
      ))}
      <button onClick={ props.clearCompleted } className="clear-btn">
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;