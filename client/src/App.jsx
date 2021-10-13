import React from 'react';
import ReactDOM from 'react-dom';
import '../public/stylesheet.css';
import AddEntry from './components/AddEntry.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <h1>Blog</h1>
        <h3>minimum viable product</h3>
        <AddEntry />
      </div>
    )
  }
}

ReactDOM.render(<App /> ,document.getElementById('app'))