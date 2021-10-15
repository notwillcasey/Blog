import React from 'react';
import ReactDOM from 'react-dom';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';
import axios from 'axios';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: 'test',
      tasks: []
    }
    this.getTasks = this.getTasks.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks () {
    const url = window.location.href
    axios.get(`${url}api/getTask?user=${this.state.user}`)
      .then((response) => {
        response.data.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        })
        this.setState({ tasks: response.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  addTask (e) {
    const url = window.location.href;
    const body = {
      user: 'test',
      date: e.target.taskDate.value,
      task: e.target.taskBody.value
    }
    const options =  {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    axios.post(`${url}api/addTask`, body, options)
      .then((response) => {
        response.data.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        })
        this.setState({ tasks: response.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  deleteTask (e) {
    const url = window.location.href;
    const body = {
      user: 'test',
      id: e.target.id
    }
    const options =  {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    axios.post(`${url}api/deleteTask`, body, options)
    .then((response) => {
      response.data.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      })
      this.setState({ tasks: response.data })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render () {
    return (
      <div>
        <AddTask addTask={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} />
      </div>
    )
  }
}

export default Main