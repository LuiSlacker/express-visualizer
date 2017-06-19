'use strict';

const Router = require('./Router');

module.exports = (app) => {
  app.get('/visualize', (req, res, next) => {
    res.json(new Router(app._router));
  });
};
