'use strict';

module.exports = class Middleware {
  constructor(layer) {
    this.type = this.constructor.name;
    this.name = layer.name;
    this.handler = layer.handle.toString();
  }
};
