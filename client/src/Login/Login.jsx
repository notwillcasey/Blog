import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    this.submitLogin = this.submitLogin.bind(this);
    this.signUpUser = this.signUpUser.bind(this);
  }

  submitLogin (e) {
    e.preventDefault();
    if (!e.target.username.value || !e.target.password.value) {
      return
    }
    const url = window.location.href;
    const body = {
      user: e.target.username.value,
      hashword: e.target.password.value
    }
    const options =  {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    axios.post(`${url}auth/checkUser`, body, options)
      .then((response) => {
        this.props.authorizeUser(response.data);
      })
      .catch((err) => {
        alert('incorrect username/password combination')
      })
  }

  signUpUser () {
    this.props.newUser();
  }

  render () {
    return (
      <div id='loginContainer' >
        <h4 className='subtitle' >please login to continue</h4>
        <form onSubmit={this.submitLogin} >
          <input className='loginForm' type='text' id='username' placeholder='username' /><br />
          <input className='loginForm' type='password' id='password' placeholder='password' /><br />
          <input className='loginForm' value='Login' type='submit' id='loginSubmit' /><br />
        </form>
        <button onClick={ this.signUpUser }>New User? Click Here!</button>
      </div>
    )
  }
}

export default Login;