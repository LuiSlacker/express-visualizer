'use strict';

const Router = require('./Router');
const path = require('path');

module.exports = (app) => {
  app.get('/visualize', (req, res, next) => { // eslint-disable-line no-unused-vars
    res.sendFile(path.join(__dirname, '/index.html'));
  });

  app.get('/fetchData', (req, res, next) => { // eslint-disable-line no-unused-vars
    res.json(new Router(app._router)); // eslint-disable-line no-underscore-dangle
  });
};
