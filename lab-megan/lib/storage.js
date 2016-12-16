'use strict';

const storage = {};

module.exports = exports = {};

exports.createItem = function(schemaName, item) {

  console.log('::: reached inside createItem block of storage.js :::');

  if (!schemaName) return Promise.reject(new Error('Schema name was expected, no schema name arrived.'));

  if (!item) return Promise.reject(new Error('Item was expected, no item arrived.'));

  if(!storage[schemaName]) storage[schemaName] = {};
  storage[schemaName][item.id] = item;

  return Promise.resolve(item);
};

// DELETE version modeled after createItem
// exports.deleteItem = function(schemaName, id) {
//
//   if (!schemaName) return Promise.reject(new Error('Schema name was expected, no chema name arrived.'));
//
//   if (!id) return Promise.reject(new Error('An id was expected, no id arrived.'));
//
//   console.log(' ::: REACHED INSIDE deleteItem BLOCK ::: ');
//
//   delete schemaName[id];
//
//   return resolve();
//
// };

exports.fetchItem = function(schemaName, id) {
  return new Promise((resolve, reject) => {

    console.log('::: reached inside fetchItem block :::');

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

    console.log('::: reached inside top of delete item block of storage.js :::');

    if (!schemaName) return reject(new Error('Schema name was expected, no schema name arrived.'));

    console.log('::: made it past !schemaName :::');

    if(!id) return reject(new Error('An id was expected, no id arrived.'));

    console.log('::: made it past !id :::');

    var doomedSchema = storage[schemaName];
    if (!doomedSchema) return reject(new Error('Schema not found.'));

    console.log('::: made it past !doomedSchema :::');

    var doomedItem = doomedSchema[id];
    if (!doomedItem) return reject(new Error('Item not found.'));

    console.log('::: made it past item not found :::');    

    delete doomedSchema[id];

    console.log('in storage.js, id is: ', id);

    // var schema = storage[schemaName];
    // delete storage[schemaName][id];

    resolve(doomedSchema);

  });
};

// DELETE version modeled after fetchItem


// exports.deleteItem = function(schemaName, item) {
//
//   if (!schemaName) return Promise.reject(new Error('Schema name was expected, not schema name arrived.'));
//
//   if (!id) return reject(new Error('An id was expected, no id arrived.'));
//
//   if (!item) return Promise.reject(new Error('Item was expected, no item arrived.'));
//
//   delete schema[id];
//
//   resolve();
// };
