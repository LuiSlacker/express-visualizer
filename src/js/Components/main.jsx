import React from 'react';
import axios from 'axios';
/* const Header = require('./header.jsx');
const Content = require('./content.jsx');
const Footer = require('./footer.jsx'); */

class Main extends React.Component {

  constructor () {
    super();

    this.state = {
      stack: [],
    }
    this.fetchStack = this.fetchStack.bind(this);
    this.fetchStack();
  }

  fetchStack() {
    axios.get('/fetchData')
      .then(response => {
        this.setState({ stack: response.data.router.stack })
      })
      .catch(console.log);
  }

  render() {
    return (<main>
      {this.state.stack.map(entry =>
        <div>{entry.type} - {entry.name}</div>)
      }
    </main>);
  }
}

export default Main;

