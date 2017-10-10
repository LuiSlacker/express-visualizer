import React from 'react';
import axios from 'axios';
import Router from './router.jsx';
/* const Header = require('./header.jsx');
const Content = require('./content.jsx');
const Footer = require('./footer.jsx'); */

class Main extends React.Component {

  constructor () {
    super();

    this.state = {
      stack: [],
      endpoint: {},
    }
    this.fetchStack = this.fetchStack.bind(this);
    this.renderRouter = this.renderRouter.bind(this);
    this.fetchStack();
  }

  fetchStack() {
    axios.get('/expressVisualizer/fetchData')
      .then(response => {
        this.setState({ stack: response.data.router.stack })
      })
      .catch(console.log);
  }

  renderRouter(stack) {
    return (
      stack.filter(entry => entry.type === 'Router').map((router, index) =>
        <li key={index}><label className="tree-toggler nav-header">{router.type}</label>
          <ul className="nav nav-list tree">
            {
              router.router.stack.filter(entry => entry.type === 'Endpoint').map((endpoint, index) =>
                <li key={index}><a href="#" onClick={() => this.setState({ endpoint })}>{endpoint.HTTPverbs}  {endpoint.path}</a></li>
            )}
            {this.renderRouter(router.router.stack)}
          </ul>
        </li>
    ));
  }

  render() {
    return (<main>
      <h1>Express Middleware-Stack Visualizer</h1>
      <div className='main-flex-wrapper'>
        <div className="router">
          <h4>Router</h4>
            <div className="well" style={{width: 300, padding: '8px 0'}}>
              <div style={{overflowY: 'scroll', overflowX: 'hidden', height: '600px'}}>
                <ul className="nav nav-list">
                  <li><label className="tree-toggler nav-header">Main Router</label>
                    <ul className="nav nav-list tree">
                    {
                      this.state.stack.filter(entry => entry.type === 'Endpoint').map((endpoint, index) =>
                        <li key={index}><a href="#" onClick={() => this.setState({ endpoint })}>{endpoint.HTTPverbs}  {endpoint.path}</a></li>
                    )}
                    </ul>
                  </li>
                  <li className="divider"></li>
                  {this.renderRouter(this.state.stack)}
                </ul>
              </div>
            </div>
        </div>
        <div className="stack">
          <h4>Stack</h4>
          {this.state.endpoint.HTTPverbs}  {this.state.endpoint.path}
          {/* {<Router stack={this.state.stack} />} */}
        </div>
      </div>

      {
        // this.state.stack.filter(entry => entry.type === 'Router').map((router, index) =>
        //     <Router key={index} stack={router.router.stack} />
        // )
      }


    </main>);
  }
}

export default Main;

