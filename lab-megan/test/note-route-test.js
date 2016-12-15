'use strict';

const request = require('superagent');
const expect = require('chai').expect;

require('../server.js');

describe('Cheese Routes', function() {
  var cheese = null;

  describe('POST: /api/cheese', function() {
    it('Should return a cheese', function(done) {
      request.post('localhost:8000/api/cheese')
      .send({ name: 'test name', content: 'test content'})
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body.name).to.equal('test name');
        expect(res.body.content).to.equal('test content');
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
      expect(res.body.name). to.equal('test name');
      expect(res.body.content).to.equal('test content');
      done();
    });
  });
});
