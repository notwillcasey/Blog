import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
    this.getData = this.getData.bind(this);
  }

  getData () {
    axios.get('https://api.wheretheiss.at/v1/satellites/25544')
      .then(response => {
        this.setState({ data: response.data })
      })
  }

  render () {
    return (
      <div id='container' >
        <button className='pointer' onClick={this.getData}>Where above the world is the ISS?</button>
        {/* <div>{JSON.stringify(this.state.data)}</div> */}
        <div>{ !this.state.data ? '' : JSON.stringify(this.state.data) }</div>
      </div>
    )
  }
}

export default About;