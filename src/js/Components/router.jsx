import React from 'react';
import PropTypes from 'prop-types';

const Router = ({ stack }) => {
  return(
    <div>
      {stack.filter(entry => entry.type === 'Endpoint').map((entry, index) => {
        return(
          <div key={index} className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title"><a data-toggle="collapse" data-target={'#panel'+index} href={'#panel'+index}>{entry.HTTPverbs}  {entry.path}</a></h3>
            </div>
            <div id={'panel'+index} className="panel-collapse collapse in">
              <div className="panel-body">
                <h4>local Middlewares</h4>
                <ul>
                  {entry.localMDDWStack.map((mdw, index) =>
                    <li key={index}>{mdw.name}</li>
                )}
                </ul>

                <h4>global Middlewares</h4>
                <ul>
                  {entry.globalMDDWStack.map((mdw, index) =>
                    <li key={index}>{mdw.name}</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Router.propTypes =  {
  stack: PropTypes.array.isRequired,
};

export default Router;
