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
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  // {
  //   name: 'Milk',
  //   id: 1235,
  //   purchased: false
  // },
  // {
  //   name: 'Pizza Sauce',
  //   id: 1246,
  //   purchased: false
  // },
  // {
  //   name: 'Raw Honey',
  //   id: 1237,
  //   purchased: false
  // },
  // {
  //   name: 'Granola',
  //   id: 1248,
  //   purchased: false
  // }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }


  // Add item function uses state to handle form submissions that add new items to the To Do List
  addTask = (taskName) => {
    // Set state spreads out the original list of items and then allows for new form submissions to add to the list
    this.setState({
      tasks: [...this.state.tasks, {
        task: taskName,   // Task name comes from form input
        id: Date.now(),   // Generate random ID
        completed: false  // Default status for a To Do item is not completed
      }]
    });
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

  

  render() {
    return (
      <div className='App'>
        <header className='header'>
          <h1>Welcome to your Todo List App!</h1>
          <TodoForm addTask={ this.addTask }/>
        </header>
        <TodoList clearCompleted={ this.clearCompleted } toggleTask={ this.toggleTask } tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
