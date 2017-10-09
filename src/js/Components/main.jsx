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
    axios.get('/expressVisualizer/fetchData')
      .then(response => {
        this.setState({ stack: response.data.router.stack })
      })
      .catch(console.log);
  }

  render() {
    return (<main>

      {this.state.stack.filter(entry => entry.type === 'Endpoint').map((entry, index) => {
        return(<div key={index} className="panel panel-primary">
				  <div className="panel-heading">
					  <h3 className="panel-title"><a data-toggle="collapse" data-target={'#panel'+index} href={'#panel'+index}>{entry.HTTPverbs}  {entry.path}</a></h3>
				  </div>
          <div id={'panel'+index} className="panel-collapse collapse in">
            <div className="panel-body">
              <h4>local Middlewares</h4>
              <ul>
                {entry.localMDDWStack.map(mdw =>
                  <li>{mdw.name}</li>
              )}
              </ul>

              <h4>global Middlewares</h4>
              <ul>
                {entry.globalMDDWStack.map(mdw =>
                  <li>{mdw.name}</li>
              )}
              </ul>
            </div>
          </div>
			  </div>)})
      }
    </main>);
  }
}

export default Main;

