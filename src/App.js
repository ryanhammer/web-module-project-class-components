import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Prepare Salsa Verde',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Wash Dishes',
    id: 1528817084371,
    completed: false
  },
  {
    task: 'Fold Laundry',
    id: 1528817084444,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks,
      input: '',
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
    // Add item function uses state to handle form submissions that add new items to the To Do List
    const addTask = (taskName) => {
      // Set state spreads out the original list of items and then allows for new form submissions to add to the list
      this.setState({
        tasks: [...this.state.tasks, {
          task: taskName,   // Task name comes from form input
          id: Date.now(),   // Generate random ID
          completed: false  // Default status for a To Do item is not completed
        }]
      });
    }
    addTask(this.state.input);
  }

  toggleTask = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        return( {
          ...task,
          completed: !task.completed
        });
      } else {
        return task;
      }
    });

    this.setState({
      tasks: newTasks
    });
  }

  clearCompleted = e => {
    this.setState({
      tasks: this.state.tasks.filter( task => (!task.completed))
    });
  }

  render() {
    return (
      <div className='App'>
        <header className='header'>
          <h1>Welcome to your Todo List App!</h1>
          <TodoForm handleChanges={ this.handleChanges } handleSubmit={this.handleSubmit } addTask={ this.addTask }/>
        </header>
        <TodoList clearCompleted={ this.clearCompleted } toggleTask={ this.toggleTask } tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;