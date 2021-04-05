import React from "react";

import Task from "./Task";

const TodoList = props => {
  // for sorting the list based on whether an item has been purchased or not
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);

  const handleClick = () => {
    props.clearCompleted();
  }
  
  return (
    <div className="to-do-list">
      {props.tasks.map(task => (
        <Task toggleTask = { props.toggleTask } key={task.id} task={task} />
      ))}
      <button onClick={ handleClick } className="clear-btn">
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;