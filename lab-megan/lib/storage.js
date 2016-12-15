'use strict';

const storage = [];

module.exports = exports = {};

exports.createItem = function(schemaName, item) {

  if (!schemaName) return Promise.reject(new Error('Schema name was expected, no schema name arrived.'));

  if (!item) return Promise.reject(new Error('Item was expected, no item arrived.'));
  if(!storage[schemaName]) storage[schemaName] = {};

  storage[schemaName][item.id] = item;
  return Promise.resolve(item);
};

exports.fetchItem = function(schemaName, id) {
  return newPromise((resolve, reject) => {

    if (!schemaName) return reject(new Error('Schema name was expected, no schema name arrived.'));
    if (!id) return reject(new Error('An id was expected, no id arrived.'));

    var schema = storage[schemaName];
    if (!schema) return reject(new Error('Schema not found.'));

    var item = schema[id];
    if (!item) return reject(new Error('item not found'));

    resolve(item);
  });
};
