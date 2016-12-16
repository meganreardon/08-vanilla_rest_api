'use strict';

const request = require('superagent');
const expect = require('chai').expect;

require('../server.js');

describe('Cheese Routes', function() {
  var cheese = null;

  describe('POST: /api/cheese', function() {
    it('Should return a cheese', function(done) {
      request.post('localhost:8000/api/cheese')
      .send({ color: 'test color', pokableness: 'test pokableness'})
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body.color).to.equal('test color');
        expect(res.body.pokableness).to.equal('test pokableness');
        cheese = res.body;
        done();
      });
    });
  });
});

describe('GET: /api/cheese', function() {
  it('should return a cheese', function(done) {
    request.get(`localhost:8000/api/cheese?id=${cheese.id}`)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.status).to.equal(200);
      expect(res.body.color).to.equal('test color');
      expect(res.body.pokableness).to.equal('test pokableness');
      done();
    });
  });
});

describe('DELETE: /api/cheese', function() {
  it('should delete a cheese', function(done) {
    request.delete(`localhost:8000/api/cheese?id=${cheese.id}`)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.status).to.equal(204);
      // TODO expect record to not exist
      done();
    });
  });
});
