import React from 'react';
import ReactDOM from 'react-dom';
import AddTask from './AddTask.jsx';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <h1>todo</h1>
        <AddTask />
      </div>
    )
  }
}

export default Main