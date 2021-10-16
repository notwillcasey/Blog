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
      token: null,
      user: null
    }
    this.authorizeUser = this.authorizeUser.bind(this);
    this.getSessionToken = this.getSessionToken.bind(this);
  }

  getSessionToken () {
    const sessionToken = window.sessionStorage.getItem('token');
    const authToken = JSON.parse(sessionToken);
    const sessionUser = window.sessionStorage.getItem('user');
    const authUser = JSON.parse(sessionUser);
    console.log(authToken, authUser)
    this.setState({ token: authToken, user: authUser })
  }

  authorizeUser (value) {
    window.sessionStorage.setItem('token', JSON.stringify(value.hashedpassword))
    window.sessionStorage.setItem('user', JSON.stringify(value.username))
    this.setState({ token: value.hashedpassword, user: value.username })
  }

  componentDidMount () {
    this.getSessionToken();
  }

  render () {
    if (!this.state.token) {
      return (
        <div>
          <h1 id='siteTitle'>To-Do</h1>
          <Login authorizeUser={ this.authorizeUser }/>
        </div>
      )
    }
    return (
      <div>
        <h1 id='siteTitle'>To-Do</h1>
        <BrowserRouter>
          <Switch>
            {/* <Route path='/login' >
               <Login />
            </Route> */}
            <Route path='/' >
               <Main currentUser={this.state.user} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(<App /> ,document.getElementById('app'))