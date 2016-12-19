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
        // res.writeHead(200, {'Content-Type': 'application/json'});
        // res.write(JSON.stringify(cheese));
        // res.end();
      })
      .catch( err => {
        // console.log('::: reached get function error block of server.js :::');
        console.error(err);
        response.sendText(res, 404, 'File not found.');
        // res.writeHead(404, {'Content-Type': 'text/plain'});
        // res.write('File not found. Who moved my cheese?');
        // res.end();
      });
      return;
    }
    response.sendText(res, 400, 'Bad request.');
    // res.writeHead(400, {'Content-Type': 'text/plain'});
    // res.write('Bad request.');
    // res.end();
  });

  router.delete('/data/cheese', function(req, res) {
    console.log('::: reached inside delete block of server.js :::');
    if (req.url.query.id) {
      storage.deleteItem('cheese', req.url.query.id)
      .then( () => {
        response.sendText(res, 204, null); // TODO is null what is best to use here?
        // res.writeHead(204, {'Content-Type': 'text/plain'});
        // res.end();
      })
      .catch( err => {
        console.error(err);
        response.sendText(res, 404, 'File not found.');
        // res.writeHead(404, {'Content-Type': 'text/plain'});
        // res.write('File not found. Who moved my cheese?');
        // res.end();
      });
      return;
    }
    response.sendText(res, 400, 'Bad request.');
    // res.writeHead(400, {'Content-Type': 'text/plain'});
    // res.write('Bad request.');
    // res.end();
  });

  router.post('/data/cheese', function(req, res) {
    try {
      var cheese = new Cheese(req.body.color, req.body.pokableness);
      storage.createItem('cheese', cheese);
      // console.log('::: reached body of router post');
      response.sendJSON(res, 200, cheese);
      // res.writeHead(200,{'Content-Type': 'application/json'});
      // res.write(JSON.stringify(cheese));
      // res.end();
    } catch (err) {
      // console.log('::: reached body of router post error');
      console.error(err);
      response.sendText(res, 400, 'Bad request.');
      // res.writeHead(400,{'Content-Type': 'text/plain'});
      // res.write('Bad request.');
      // res.end();
    }
  });

};
