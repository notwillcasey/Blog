import React from 'react';
import ReactDOM from 'react-dom';
import '../public/stylesheet.css';

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Main from './Main/Main.jsx';
import Login from './Login/Login.jsx';
import About from './About/About.jsx';
import SignUp from './SignUp/SignUp.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: null,
      user: null,
      newUser: false
    }
    this.authorizeUser = this.authorizeUser.bind(this);
    this.getSessionToken = this.getSessionToken.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.newUser = this.newUser.bind(this);
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

  logoutUser () {
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('user')
    this.setState({ token: null, user: null, newUser: false })
  }

  newUser () {
    this.setState({ newUser: !this.state.newUser })
  }

  componentDidMount () {
    if (!this.state.newUser) { this.getSessionToken() };
  }

  render () {
    if (!this.state.token && this.state.newUser) {
      return (
        <div>
          <h1 id='siteTitle'>To-Do</h1>
          <SignUp authorizeUser={ this.authorizeUser } newUser={ this.newUser } />
        </div>
      )
    } else if (!this.state.token && !this.state.newUser) {
      return (
        <div>
          <h1 id='siteTitle'>To-Do</h1>
          <Login authorizeUser={ this.authorizeUser } newUser={ this.newUser } />
        </div>
      )
    }
    return (
      <div>
        <BrowserRouter>
        <div className='headerContainer'>
          <h1 id='siteTitle'>To-Do</h1>
          <nav>
          <span><Link className='navBar' to='/about'>About</Link></span>
          <span><Link className='navBar' to='/'>To-Do List</Link></span>
          <button className='navBar button' onClick={ this.logoutUser } >Logout</button>
          </nav>
        </div>
          <Switch>
            <Route path='/about' >
               <About />
            </Route>
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