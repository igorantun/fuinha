'use strict';

/* Exports */
module.exports = {
  filters: {
    trim: value => {
      return typeof value === 'string' ? value.trim() : value;
    },
    slice: (value, start, end) => {
      return typeof value === 'string' ? value.slice(start, end) : value;
    },
    upperCase: value => {
      return typeof value === 'string' ? value.toUpperCase() : value;
    },
    lowerCase: value => {
      return typeof value === 'string' ? value.toLowerCase() : value;
    },
    replace: (value, before, after) => {
      return typeof value === 'string' ? value.replace(before, after) : value;
    },
    boolean: value => {
      return Boolean(value);
    }
  },

  selectors: () => {
    return {
      title: 'title'
    };
  },

  format: obj => {
    return obj;
  }
};
