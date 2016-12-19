'use strict';

const storage = require('../lib/storage.js');
const Cheese = require('../model/cheese.js');
const response = require('../lib/response.js');

module.exports = function(router) {

  router.get('/data/cheese', function(req, res) {
    // console.log(':::reached inside get api function:::');
    if (req.url.query.id) {
      storage.fetchItem('cheese', req.url.query.id)
      .then( cheese => {
        response.sendJSON(res, 200, cheese);
      })
      .catch( err => {
        // console.log('::: reached get function error block of server.js :::');
        console.error(err);
        response.sendText(res, 404, 'File not found.');
      });
      return;
    }
    response.sendText(res, 400, 'Bad request.');
  });


  router.post('/data/cheese', function(req, res) {
    try {
      var cheese = new Cheese(req.body.color, req.body.pokableness);
      storage.createItem('cheese', cheese);
      // console.log('::: reached body of router post');
      response.sendJSON(res, 200, cheese);
    } catch (err) {
      // console.log('::: reached body of router post error');
      console.error(err);
      response.sendText(res, 400, 'Bad request.');
    }
  });

  router.delete('/data/cheese', function(req, res) {
    // console.log('::: reached inside delete block of server.js :::');
    if (req.url.query.id) {
      storage.deleteItem('cheese', req.url.query.id)
      .then( () => {
        response.sendText(res, 204, null);
      })
      .catch( err => {
        console.error(err);
        response.sendText(res, 404, 'File not found.');
      });
      return;
    }
    response.sendText(res, 400, 'Bad request.');
  });

};
