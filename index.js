'use strict';

const Router = require('./core/Router');
const path = require('path');

module.exports = (app) => {
  // Allow CORS
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

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

  app.get('/expressVisualizer/bootstrap.min.css', (req, res, next) => { // eslint-disable-line no-unused-vars
    res.sendFile(path.join(__dirname, './public/bootstrap.min.css'));
  });

  app.get('/expressVisualizer/bootstrap.min.js', (req, res, next) => { // eslint-disable-line no-unused-vars
    res.sendFile(path.join(__dirname, './public/bootstrap.min.js'));
  });

  app.get('/expressVisualizer/js/highlight.min.js', (req, res, next) => { // eslint-disable-line no-unused-vars
    res.sendFile(path.join(__dirname, './public/js/highlight.min.js'));
  });

  app.get('/expressVisualizer/highlight.css', (req, res, next) => { // eslint-disable-line no-unused-vars
    res.sendFile(path.join(__dirname, './public/default.min.css'));
  });
};
