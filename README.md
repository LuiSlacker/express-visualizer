# Express Visualizer

Visualize all endpoints registered within an express-app and browse all global middlewares applied to those.

<img src="https://raw.githubusercontent.com/LuiSlacker/express-visualizer/master/example_screenshot.png" alt="Drawing" style="width: 800px;"/>

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

* Displays all endpoints registered with an express-app
* Shows the global middleware stack applied for each endpoint
* Also works for [nested routers](http://expressjs.com/en/4x/api.html#router) in Express 4.

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

A new endpoint is will then be registered to your app and you can browse your routes at
```
<yourHost:yourPort>/expressVisualizer/visualize
```

## License

  [MIT](LICENSE)
