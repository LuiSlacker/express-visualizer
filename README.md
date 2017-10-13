# Express Visualizer

[![NPM Version][npm-image]][npm-url]

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install express-middleware-visualizer --save-dev
```
## Features

Displays all endpoints registered with an express-app and show each middleware stack. Also works for [nested routers](http://expressjs.com/en/4x/api.html#router).

## Usage

Simply require the package passing the global app object to it.
```
const express = require('express');
const app = express();

// register your routes and subrouters here

// place this line after all routes and subrouteres have been registered, but just before any errorHandlers
require('express-middleware-visualizer')(app);

app.use(errorHandler());

const server = app.listen(process.env.PORT || 4001, () => {
  log.info(`server started, listening on port: ${server.address().port}`);
});


```

## License

  [MIT](LICENSE)
