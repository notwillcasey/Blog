import React from 'react';
import ReactDOM from 'react-dom';
import '../public/stylesheet.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from './Main/Main.jsx';
import Login from './Login/Login.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <h1 id='siteTitle'>To-Do</h1>
        <BrowserRouter>
          <Switch>
            <Route path='/login' component={ Login } />
            <Route path='/' component={ Main } />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(<App /> ,document.getElementById('app'))