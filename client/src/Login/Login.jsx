import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.submitLogin = this.submitLogin.bind(this);
  }

  submitLogin (e) {
    e.preventDefault();
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
        console.log(response.data)
        this.props.authorizeUser(response.data);
      })
      .catch((err) => {
        e.target.password.reset();
        alert('incorrect username/password combination')
      })
  }

  render () {
    return (
      <div id='loginContainer' >
        <h4 className='subtitle' >please login to continue</h4>
        <form onSubmit={this.submitLogin} >
          <input className='loginForm' type='text' id='username' placeholder='username' /><br />
          <input className='loginForm' type='password' id='password' placeholder='password' /><br />
          <input className='loginForm' type='submit' id='loginSubmit' />
        </form>
      </div>
    )
  }
}

export default Login;