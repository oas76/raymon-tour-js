'use strict';

var _ = require('lodash');
var Golfclub = require('./golfclub.model');

// Get list of golfclubs
exports.index = function(req, res) {
  Golfclub.find(function (err, golfclubs) {
    if(err) { return handleError(res, err); }
    return res.json(200, golfclubs);
  });
};

// Get a single golfclub
exports.show = function(req, res) {
  Golfclub.findById(req.params.id, function (err, golfclub) {
    if(err) { return handleError(res, err); }
    if(!golfclub) { return res.send(404); }
    return res.json(golfclub);
  });
};

// Creates a new golfclub in the DB.
exports.create = function(req, res) {
  Golfclub.create(req.body, function(err, golfclub) {
    if(err) { return handleError(res, err); }
    return res.json(201, golfclub);
  });
};

// Updates an existing golfclub in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Golfclub.findById(req.params.id, function (err, golfclub) {
    if (err) { return handleError(res, err); }
    if(!golfclub) { return res.send(404); }
    var updated = _.merge(golfclub, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, golfclub);
    });
  });
};

// Deletes a golfclub from the DB.
exports.destroy = function(req, res) {
  Golfclub.findById(req.params.id, function (err, golfclub) {
    if(err) { return handleError(res, err); }
    if(!golfclub) { return res.send(404); }
    golfclub.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}