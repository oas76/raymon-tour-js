'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var golfclub = require('./golfclub.model');
var testinstance = require('./golfclub.instance');

describe('GET /api/golfclubs', function() {
  var club_id;
  var course_id;
  var hole_id;

  it('should respond with JSON golfclub', function(done) {
    request(app)
      .post('/api/golfclubs')
      .send(testinstance.getclub())
      .expect(201)
      .expect('Content-Type', 'application/json')
      .end(function(err, res) {
        if (err) return done(err);
        should.exist(res.body._id);
        should(res.body._id.length).be.exactly(24);
        club_id = res.body._id;
        done();
      });
  });

  it('should respond with JSON golfclub', function(done) {
    request(app)
      .get('/api/golfclubs/'+club_id)
      .expect(200)
      .expect('Content-Type', 'application/json')
      .end(function(err, res) {
        if (err) return done(err);
        should.exist(res.body);
        res.body.name.should.eql(testinstance.getclub().name);
        done();
      });
  });

  it('should respond with JSON golfclub', function(done) {
    request(app)
      .post('/api/golfclubs/' +club_id+ '/courses')
      .send(testinstance.getcourse())
      .expect(201)
      .expect('Content-Type', 'application/json')
      .end(function(err, res) {
        if (err) return done(err);
        should.exist(res.body._id);
        should(res.body._id.length).be.exactly(24);
        course_id = res.body._id;
        done();
      });
  });


  it('should respond with JSON golfcourse', function(done) {
    request(app)
      .get('/api/golfclubs/'+club_id+'/courses/'+course_id)
      .expect(200)
      .expect('Content-Type', 'application/json')
      .end(function(err, res) {
        if (err) return done(err);
        should.exist(res.body);
        done();
      });
  });

  it('should respond with JSON golfhole', function(done) {
    request(app)
      .post('/api/golfclubs/'+club_id+'/courses/'+course_id+'/holes')
      .send(testinstance.gethole())
      .expect(201)
      .expect('Content-Type', 'application/json')
      .end(function(err, res) {
        if (err) return done(err);
        should.exist(res.body._id);
        should(res.body._id.length).be.exactly(24);
        hole_id = res.body._id;
        done();
      });
  });

  it('should respond with JSON golfhole', function(done) {
    request(app)
      .get('/api/golfclubs/'+club_id+'/courses/'+course_id+'/holes/'+hole_id)
      .expect(200)
      .expect('Content-Type', 'application/json')
      .end(function(err, res) {
        if (err) return done(err);
        should.exist(res.body);
        done();
      });
  });

  it('should respond with JSON golfhole', function(done) {
    request(app)
      .delete('/api/golfclubs/'+club_id+'/courses/'+course_id+'/holes/'+hole_id)
      .expect(204)
      .end(function(err, res) {
        if (err) return done(err);
        should.exist(res.body);
        done();
      });
  });

  it('should respond with JSON golfcourse', function(done) {
    request(app)
      .delete('/api/golfclubs/'+club_id+'/courses/'+course_id)
      .expect(204)
      .end(function(err, res) {
        if (err) return done(err);
        should.exist(res.body);
        done();
      });
  });

  it('should respond with JSON golfclub', function(done) {
    request(app)
      .delete('/api/golfclubs/'+club_id)
      .expect(204)
      .end(function(err, res) {
        if (err) return done(err);
        should.exist(res.body);
        done();
      });
  });

});

