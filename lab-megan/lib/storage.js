'use strict';

const storage = {};

module.exports = exports = {};

exports.createItem = function(schemaName, item) {

  // console.log('::: reached inside createItem block of storage.js :::');

  if (!schemaName) return Promise.reject(new Error('Schema name was expected, no schema name arrived.'));

  if (!item) return Promise.reject(new Error('Item was expected, no item arrived.'));

  if(!storage[schemaName]) storage[schemaName] = {};
  storage[schemaName][item.id] = item;

  return Promise.resolve(item);
};

exports.fetchItem = function(schemaName, id) {
  return new Promise((resolve, reject) => {

    // console.log('::: reached inside fetchItem block :::');

    if (!schemaName) return reject(new Error('Schema name was expected, no schema name arrived.'));

    if (!id) return reject(new Error('An id was expected, no id arrived.'));

    var schema = storage[schemaName];
    if (!schema) return reject(new Error('Schema not found.'));

    var item = schema[id];
    if (!item) return reject(new Error('Item not found.'));

    resolve(item);
  });
};

exports.deleteItem = function(schemaName, id) {
  return new Promise((resolve, reject) => {

    if (!schemaName) return reject(new Error('Schema name was expected, no schema name arrived.'));

    if(!id) return reject(new Error('An id was expected, no id arrived.'));

    var doomedSchema = storage[schemaName];
    if (!doomedSchema) return reject(new Error('Schema not found.'));

    var doomedItem = doomedSchema[id];
    if (!doomedItem) return reject(new Error('Item not found.'));

    delete doomedSchema[id];

    // console.log('in deleteItem of storage.js, id is: ', id);

    resolve(doomedSchema);

  });
};
