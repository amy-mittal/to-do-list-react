import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    taskText: '',
    tasks: []
  };

  handleInputChange = event => {
    this.setState({taskText: event.target.value}); // asynchronous (use this to change state)
  };

  handleButtonClick = () => {
    // 1. add task to list
    // 2. clear input field
    this.state.tasks.unshift(this.state.taskText);
    this.setState({taskText: ''});
  };

  renderTask = (task, index) => {
    return <li key={index}>{task}</li>; // key has to be unique for every loop
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
