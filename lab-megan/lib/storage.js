'use strict';

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'});

// const storage = {};

module.exports = exports = {};

exports.createItem = function(schemaName, item) {

  if (!schemaName) return Promise.reject(new Error('Schema name was expected, no schema name arrived.'));
  if (!item) return Promise.reject(new Error('Item was expected, no item arrived.'));

  let json = JSON.stringify(item);
  // console.log(`::: id is: ${item.id}`);
  return fs.writeFileProm(`${__dirname}/../data/${schemaName}/${item.id}.json`, json)
  .then( () => item)
  .catch (err => Promise.reject(err));

};

exports.fetchItem = function(schemaName, id) {

  if (!schemaName) return Promise.reject(new Error('Schema name was expected, no schema name arrived.'));
  if (!id) return Promise.reject(new Error('An id was expected, no id arrived.'));

  return fs.readFileProm(`${__dirname}/../data/${schemaName}/${id}.json`)
  .then(data => {
    let item = JSON.parse(data.toString());
    return item;
  })
  .catch( err => Promise.reject(err));

};

exports.deleteItem = function(schemaName, id) {

  if (!schemaName) return Promise.reject(new Error('Schema name was expected, no schema name arrived.'));
  if(!id) return Promise.reject(new Error('An id was expected, no id arrived.'));

  return fs.unlinkProm(`${__dirname}/../data/${schemaName}/${id}.json`)
  // .then( () => id)
  .catch( err => Promise.reject(err));

};
