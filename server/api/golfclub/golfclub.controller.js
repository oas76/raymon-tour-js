'use strict';

var _ = require('lodash');
var Golfclub = require('./golfclub.model');
var Golfcourse = require('./golfcourse.model');
var Golfhole = require('./golfhole.model');

// Get list of golfclubs
exports.index = function(req, res) {
  Golfclub.find(function (err, golfclubs) {
    if(err) { return handleError(res, err); }
    return res.json(200, golfclubs);
  });
};

// Get list of courses at a specific club
exports.courses = function(req, res) {
  Golfcourse.find().where('clubid').equals(req.params.id).exec(function (err, courses) {
    if(err) {return handleError(res, err); }
    if(!courses) { return res.send(404); }
    return res.json(courses);

  });
};

// Get list of holes at a specific course
exports.holes = function(req, res) {
  Golfhole.find().where('courseid').equals(req.params.cid).exec(function (err,holes) {
    if(err) {return handleError(res, err); }
    if(!holes) { return res.send(404); }
    return res.json(holes);

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

// Get a single golfcourse
exports.showcourse = function(req, res) {
  Golfcourse.findById(req.params.cid, function (err, course) {
    if(err) { return handleError(res, err); }
    if(!course) { return res.send(404); }
    return res.json(course);
  });
};

// Get a single golfhole
exports.showhole = function(req, res) {
  Golfhole.findById(req.params.hid, function (err, hole) {
    if(err) { return handleError(res, err); }
    if(!hole) { return res.send(404); }
    return res.json(hole);
  });
};




// Creates a new golfclub in the DB.
exports.create = function(req, res) {
  Golfclub.create(req.body, function(err, golfclub) {
    if(err) { return handleError(res, err); }
    return res.json(201, golfclub);
  });
};

// Creates a new golfcourse in the DB.
exports.createcourse = function(req, res) {
  Golfcourse.create(req.body, function(err, golfcourse) {
    if(err) { return handleError(res, err); }
    golfcourse.clubid = req.params.id;
    return res.json(201, golfcourse);
  });
};

// Creates a new golfhole in the DB.
exports.createhole = function(req, res) {
  Golfhole.create(req.body, function(err, golfhole) {
    if(err) { return handleError(res, err); }
    golfhole.courseid = req.params.cid;
    return res.json(201, golfhole);
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

// Deletes a golfcourse from the DB.
exports.destroycourse = function(req, res) {
  Golfcourse.findById(req.params.cid, function (err, golfcourse) {
    if(err) { return handleError(res, err); }
    if(!golfcourse) { return res.send(404); }
    golfcourse.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

// Deletes a golfhole from the DB.
exports.destroyhole = function(req, res) {
  Golfhole.findById(req.params.hid, function (err, golfhole) {
    if(err) { return handleError(res, err); }
    if(!golfhole) { return res.send(404); }
    golfhole.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
