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
        <BrowserRouter>
          <Switch>
            <Route path='/' component={ Main } />
            <Route path='/login' component={ Login } />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(<App /> ,document.getElementById('app'))