'use strict';

const uuid = require('node-uuid');

module.exports = function(color, pokableness) {

  if (!color) throw new Error('A color was expected but none arrived.');
  if (!pokableness) throw new Error('The pokableness was expected but none arrived.');

  this.id = uuid.v1();
  this.color = color;
  this.pokableness = pokableness;
};
