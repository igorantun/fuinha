'use strict';

/* Requires */
const xray = require('x-ray');
const toType = require('to-type');
const defaults = require('./helpers/defaults');

/* Class */
module.exports = class Fuinha {
  constructor(options = {}) {
    this.format = toType(options.format) === 'function' ?
      options.format :
      defaults.format;

    this.filters = toType(options.filters) === 'object' ?
      Object.assign(defaults.filters, options.filters) :
      defaults.filters;

    this.x = xray({
      filters: this.filters
    });

    this.selectors = toType(options.selectors) === 'object' || toType(options.selectors) === 'function' ?
      Object.assign(defaults.selectors(this.x), options.selectors(this.x)) :
      defaults.selectors(this.x);
  }

  scrape(url) {
    return new Promise((resolve, reject) => {
      this.x(url, this.selectors)((error, obj) => {
        if (error) {
          reject(error);
        }

        resolve(this.format(obj));
      });
    });
  }

  run(url) {
    switch (toType(url)) {
      case 'string':
        return this.scrape(url);

      default:
        return Promise.reject(new TypeError(`'url' must be a string or an iterable.`));
    }
  }
};
