'use strict';

module.exports = class Endpoint {
  constructor(layer, globalMiddlewares, globalPath = '') {
    this.layer = layer;
    this.type = this.constructor.name;
    this.path = globalPath + layer.route.path;
    this.pathParams = layer.keys;
    this.HTTPverbs = this.extractHTTPVerbs();
    this.localMDDWStack = this.extractLocalMddwStack();
    this.globalMDDWStack = [...globalMiddlewares, ...this.localMDDWStack];
  }

  extractHTTPVerbs() {
    return Object.keys(this.layer.route.methods).join('').toUpperCase();
  }

  extractLocalMddwStack() {
    return this.layer.route.stack.map(layer => ({
      name: layer.name,
      handler: layer.handle.toString(),
    }));
  }

  toJSON() {
    return delete this.layer && this;
  }
};
