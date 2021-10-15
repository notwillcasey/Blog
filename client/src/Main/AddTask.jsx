import React from 'react';
import axios from 'axios';

class AddTask extends React.Component {

  constructor(props) {
    super(props);
    this.submitNewTask = this.submitNewTask.bind(this)
  }

   submitNewTask(e) {
    e.preventDefault();
    this.props.addTask(e);
    e.target.reset();
  }

  render() {
    return(
      <div className='container'>
        <div>
        <form id='addTaskForm' onSubmit={this.submitNewTask}>
          <input className='addTaskForm' id='taskDate' type='date' />
          {/* <input className='addTaskForm' id='taskCategory' type='text' placeholder='add your category here' /> */}
          <input className='addTaskForm' id='taskBody' type='text' placeholder='add your task here' />
          <input className='addTaskForm' id='submitTask' type='submit' value='add task' />
        </form>
        </div>
      </div>
    )
  }

}

export default AddTask;