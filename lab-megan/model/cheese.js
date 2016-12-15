'use strict';

const uuid = require('node-uuid');

module.exports = function(name, content) {

  if (!name) throw new Error('A name was expected but none arrived.');
  if (!content) throw new Error('Content was expected but none arrived.');

  this.id = uuid.v1();
  this.name = name;
  this.content = content;
};
