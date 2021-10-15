import React from 'react';
import Task from './Task.jsx';

class TaskList extends React.Component {

  constructor(props) {
    super(props);

    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask (e) {
    this.props.delete(e)
  }

  render() {
    return(
      <div className='taskListContainer'>
          {this.props.tasks.map((task, index) =>
            <div className='task' key={Math.floor(Math.random() * 1032)} >
              <Task
              id={task.id}
              user={task.user}
              task={task.task}
              date={task.date}
              key={index} />

              <button
              onClick={this.deleteTask}
              id={task.id}
              className='taskContainer closeButton'
              key={Math.floor(Math.random() * 103)}>X</button>
            </div>
          )}
      </div>
    )
  }

}

export default TaskList;