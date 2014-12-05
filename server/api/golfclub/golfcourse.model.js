'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var GolfCourseSchema = new Schema({
  clubid: String,
  name: { type: String, required: true },
  tee: { type: String, required: true },
  par:  { type: Number, required: true, min: 27, max: 90 },
  length: { type: Number, required: true, min: 900, max: 10000 },
  maleslope: { type: Number, default: 113, min: 55, max: 155 },
  malerating: { type: Number, default: 72, min: 30, max: 90 },
  femaleslope: { type: Number, default: 113, min:55, max: 155 },
  femalerating: { type: Number, default: 72, min: 30, max: 90 }
});

module.exports = mongoose.model('Golfcourse',GolfCourseSchema);
