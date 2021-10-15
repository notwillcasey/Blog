import React from 'react';

class Task extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='taskContainer'>
        <div className='taskBody'>{ this.props.task } </div>
        <div className='taskDate'>Deadline: { this.props.date } </div>
        <div className='taskId'> { this.props.id } </div>
      </div>
    )
  }

}

export default Task;