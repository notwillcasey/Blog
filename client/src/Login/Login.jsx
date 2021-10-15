import React from 'react';
import ReactDOM from 'react-dom';


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  onLogin () {

  }

  render () {
    return (
      <div id='login' >
        <h4>please login to continue</h4>
        <form>
          <input className='loginForm' type='text' id='username' placeholder='username' /><br />
          <input className='loginForm' type='text' id='password' placeholder='password' /><br />
          <input className='loginForm' type='submit' id='loginSubmit' />
        </form>
      </div>
    )
  }
}

export default Login;