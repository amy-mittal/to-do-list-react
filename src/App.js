import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    taskText: '',
    tasks: []
  };

  handleInputChange = event => {
    // this.state.taskText = event.target.value; // incorrect: does not trigger a re-render
    this.setState({taskText: event.target.value}); // asynchronous (use this to change state)
  };

  handleButtonClick = () => {
    // 1. add task to list
    // 2. clear input field
    this.state.tasks.unshift(this.state.taskText);
    this.setState({taskText: '', tasks: this.state.tasks});
  };

  deleteTask = index => {
    this.state.tasks.splice(index, 1);
    this.setState({tasks: this.state.tasks}); // needed to trigger a re-render
  };

  renderTask = (task, index) => {
    // () => empty function (a trick to get around not calling a method but needing to pass parameters)
    return <li key={index}>{task} <button onClick={() => this.deleteTask(index)}>x</button></li>; // key has to be unique for every loop
  };

  render() {
    return (
        <div>
          <ul>
            {this.state.tasks.map(this.renderTask)} {/* map method send a single element of array with index to method */}
          </ul>
          <input type='text' placeholder='Enter a task' value={this.state.taskText} onChange={this.handleInputChange}/>
          <button onClick={this.handleButtonClick}>Add</button>
        </div>
    )
  }
}

export default App;
