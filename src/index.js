'use strict';

const Router = require('./core/Router');
const path = require('path');

module.exports = (app) => {
  if (process.env.NODE_ENV !== 'production') {
    app.get('/expressVisualizer/visualize', (req, res, next) => { // eslint-disable-line no-unused-vars
      res.sendFile(path.join(__dirname, './public/index.html'));
    });

    app.get('/expressVisualizer/fetchData', (req, res, next) => { // eslint-disable-line no-unused-vars
      res.json(new Router(app._router)); // eslint-disable-line no-underscore-dangle
    });

    app.get('/expressVisualizer/js/bundle.js', (req, res, next) => { // eslint-disable-line no-unused-vars
      res.sendFile(path.join(__dirname, './public/js/bundle.js'));
    });

    app.get('/expressVisualizer/js/bundle.js.map', (req, res, next) => { // eslint-disable-line no-unused-vars
      res.sendFile(path.join(__dirname, './public/js/bundle.js.map'));
    });
  }
};
