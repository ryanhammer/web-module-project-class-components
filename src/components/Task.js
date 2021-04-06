import React from 'react';

const Task = props => {
  const handleClick = () => {
    props.toggleTask(props.task.id);
  }
  return (
    <div onClick={ handleClick } className={`task${props.task.completed ? ' completed' : ''}`}>
      <p>{props.task.task}</p>
    </div>
  );
};

export default Task;