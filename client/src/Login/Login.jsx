import React from 'react';
import ReactDOM from 'react-dom';


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <h1>login</h1>
        <form>
          <input type='text' id='username' placeholder='username' />
          <input type='text' id='password' placeholder='password' />
          <input type='submit' id='loginSubmit' />
        </form>
      </div>
    )
  }
}

export default Login;