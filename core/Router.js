'use strict';

const Endpoint = require('./Endpoint');
const Middleware = require('./Middleware');

module.exports = class Router {
  constructor(router, globalMiddleware = []) {
    this.globalMiddleware = globalMiddleware;
    this.type = this.constructor.name;
    this.rawStack = router.stack;
    this.parsedStack = this.parseRoutersStack();
  }

  parseRoutersStack() {
    return this.rawStack.reduce((acc, layer) => {
      const options = {
        'bound dispatch': () => new Endpoint(layer, acc.middleware),
        router: () => new Router(layer.handle, acc.middleware),
        default: () => new Middleware(layer),
      };
      const stackAccumulated = [...acc.stack, (options[layer.name] || options.default)()];
      if (Router.isMiddleware(layer)) {
        return Object.assign({}, acc, {
          stack: stackAccumulated,
          middleware: [...acc.middleware, new Middleware(layer)],
        });
      } else return (Router.isOwnModuleEndpoint(layer)) ?  acc : Object.assign({}, acc, { stack: stackAccumulated });
    }, { middleware: [...this.globalMiddleware], stack: [] });
  }

  static isMiddleware(layer) {
    return layer.name !== 'bound dispatch' && layer.name !== 'router';
  }

  /**
   * checks whether endpoint belongs to this very own module
   */
  static isOwnModuleEndpoint(layer) {
    return layer.route && layer.route.path.includes('expressVisualizer');
  }

  toJSON() {
    return { router: this.parsedStack };
  }
};
