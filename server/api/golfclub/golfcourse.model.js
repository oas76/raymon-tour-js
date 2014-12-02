'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var GolfCourseSchema = new Schema({
  clubid: String,
  name: String,
  tee: String,
  par: String,
  length: String,
  maleslope: Number,
  malerating: Number,
  femaleslope: Number,
  femalerating: Number
});

module.exports = mongoose.model('Golfcourse',GolfCourseSchema);
