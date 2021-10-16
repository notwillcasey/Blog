import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.submitSignUp = this.submitSignUp.bind(this);
  }

  submitSignUp (e) {
    e.preventDefault();
    if (!e.target.username.value|| !e.target.password) {
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
    axios.post(`${url}auth/addUser`, body, options)
      .then((response) => {
        this.props.authorizeUser(response.data);
      })
      .catch((err) => {
        alert('incorrect username/password combination')
      })
  }

    render () {
      return (
        <div id='loginContainer' >
          <h4 className='subtitle' >please sign up to continue</h4>
          <form onSubmit={ this.submitSignUp } >
            <input className='loginForm' type='text' id='username' placeholder='username' /><br />
            <input className='loginForm' type='password' id='password' placeholder='password' /><br />
            <input className='loginForm' value='Sign Up!' type='submit' id='loginSubmit' /><br />
          </form>
          <button onClick={ this.props.newUser }>Go Back</button>
        </div>
      )
    }
}

export default SignUp;