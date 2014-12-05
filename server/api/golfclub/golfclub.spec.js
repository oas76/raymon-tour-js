'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var golfclub = require('./golfclub.model');
var testinstance = require('./golfclub.instance');

describe('GET /api/golfclubs', function() {
  var course_id;
  var hole_id;
  var club_id;

  it('Add club ', function(done) {

    request(app)
      .post('/api/golfclubs')
      .send(testinstance.getclub())
      .expect(201)
      .expect('Content-Type', 'application/json')
      .end(function (err, res) {
        if (err) return done(err);
        should.exist(res.body._id);
        should(res.body._id.length).be.exactly(24);
        club_id = res.body._id;
        should(res.body.name).be.exactly(testinstance.getclub().name);
        done();
      });
  });

  it('Find added club ', function(done) {
    request(app)
      .get('/api/golfclubs/'+club_id)
      .expect(200)
      .expect('Content-Type', 'application/json')
      .end(function(err, res) {
        if (err) return done(err);
        should.exist(res.body);
        should(res.body.name).be.exactly(testinstance.getclub().name);
        done();
      });

  });

  it('List clubs', function(done) {
    request(app)
      .get('/api/golfclubs')
      .expect(200)
      .expect('Content-Type', 'application/json')
      .end(function (err, res) {
        if (err) return done(err);
        should.exist(res.body);
        should(res.body.length).be.greaterThan(0);
        done();
      });
  });



  it('Add a course', function(done) {


    request(app)
      .post('/api/golfclubs/' + club_id + '/courses')
      .send(testinstance.getcourse())
      .expect(201)
      .expect('Content-Type', 'application/json')
      .end(function (err, res) {
        if (err) return done(err);
        should.exist(res.body._id);
        should(res.body._id.length).be.exactly(24);
        course_id = res.body._id;
        should(res.body.name).be.exactly(testinstance.getcourse().name);
        should(res.body.clubid).be.exactly(club_id);
        done();
      });
  });

  it('Find added course', function(done) {

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

  it('Add a new hole to a specific course', function(done) {
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

  it('Get specific hole', function(done) {
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


  it('Try to add invalid hole data to a specific course', function(done) {
    request(app)
      .post('/api/golfclubs/'+club_id+'/courses/'+course_id+'/holes')
      .send(testinstance.getinvalidhole())
      .expect(500)
      .expect('Content-Type', 'application/json')
      .end(function(err, res) {
        if (err) return done(err);
        console.log(res);
        done();
      });
  });


  it('Try to add uncomplete hole data to a specific course', function(done) {
    request(app)
      .post('/api/golfclubs/'+club_id+'/courses/'+course_id+'/holes')
      .send(testinstance.getuncompletehole())
      .expect(500)
      .expect('Content-Type', 'application/json')
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

  it('Delete hole', function(done) {
    request(app)
      .delete('/api/golfclubs/'+club_id+'/courses/'+course_id+'/holes/'+hole_id)
      .expect(204)
      .end(function(err, res) {
        if (err) return done(err);
        should.exist(res.body);
        done();
      });

  });


  it('Verify hole deletion', function(done) {

    request(app)
      .get('/api/golfclubs/'+club_id+'/courses/'+course_id+'/holes/'+hole_id)
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

  it('Delete course', function(done) {
    request(app)
      .delete('/api/golfclubs/'+club_id+'/courses/'+course_id)
      .expect(204)
      .end(function(err, res) {
        if (err) return done(err);
        should.exist(res.body);
        done();
      });

  });

  it('Verify course deleted', function(done) {
    request(app)
      .get('/api/golfclubs/'+club_id+'/courses/'+course_id)
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

  it('Delete club', function(done) {
    request(app)
      .delete('/api/golfclubs/'+club_id)
      .expect(204)
      .end(function(err, res) {
        if (err) return done(err);
        should.exist(res.body);
        done();
      });

  });


  it('Verify that club is deleted', function(done) {
    request(app)
      .get('/api/golfclubs/'+club_id)
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

});

