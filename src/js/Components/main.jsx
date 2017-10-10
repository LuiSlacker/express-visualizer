import React from 'react';
import axios from 'axios';
import Router from './router.jsx';

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
        <li className='nav-item' key={index}><label className="tree-toggler nav-header">{router.type}</label>
          <ul className="nav flex-column nav-list tree">
            {
              router.router.stack.filter(entry => entry.type === 'Endpoint').map((endpoint, index) =>
                <li className='nav-item' key={index}><a className="nav-link" href="#" onClick={() => this.setState({ endpoint })}>{endpoint.HTTPverbs}  {endpoint.path}</a></li>
            )}
            {this.renderRouter(router.router.stack)}
          </ul>
        </li>
    ));
  }

  getBadgeClasses(method) {
    const obj = {
      GET: 'badge badge-success badge-pill',
      DELETE: 'badge badge-danger badge-pill',
      POST: 'badge badge-primary badge-pill',
      PUT: 'badge badge-info badge-pill',
      PATCH: 'badge badge-default badge-pill',
    }
    return obj[method];
  }

  render() {
    return (<main>
      <h1>Express Middleware-Stack Visualizer</h1>
      <div className='main-flex-wrapper'>
        <div className="router">
          <div className="card" style={{width: 300}}>
          <div className="card-header">Router</div>
            <div className="card-body">
              <div style={{overflowY: 'scroll', overflowX: 'hidden', height: '600px'}}>
                <ul className="nav flex-column nav-list">
                  <li className='nav-item'><label className="tree-toggler nav-header">Main Router</label>
                    <ul className="nav flex-column nav-list tree">
                    {
                      this.state.stack.filter(entry => entry.type === 'Endpoint').map((endpoint, index) =>
                        <li className='nav-item' key={index}><a className="nav-link" href="#" onClick={() => this.setState({ endpoint })}>{endpoint.HTTPverbs}  {endpoint.path}</a></li>
                    )}
                    </ul>
                  </li>
                  <li className="divider"></li>
                  {this.renderRouter(this.state.stack)}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="stack">
          {this.state.endpoint.path && <div className="card">
              <div className="card-header">Endpoint</div>
              <div className="card-body">
                <h4 className="card-title">
                  <span className={this.getBadgeClasses(this.state.endpoint.HTTPverbs)}>{this.state.endpoint.HTTPverbs}</span>
                  <span> {this.state.endpoint.path}</span>
                </h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <h5>Middleware-stack</h5>
                <div id="accordion" role="tablist">
                {this.state.endpoint.globalMDDWStack.map((mdw, index) =>
                  <div key={index} className="card">
                    <div className="card-header" role="tab" id="headingOne">
                      <h6 className="mb-0">
                        <a data-toggle="collapse" href={"#collapseOne"+  index} aria-expanded="false" aria-controls={"#collapseOne"+  index}>
                          {mdw.name}
                        </a>
                      </h6>
                    </div>

                    <div id={"collapseOne"+  index} className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                      <div className="card-body">
                        {mdw.handler}
                      </div>
                    </div>
                  </div>
                )}
                </div>
              </div>


            </div>
          }
        </div>
      </div>
    </main>);
  }
}

export default Main;

