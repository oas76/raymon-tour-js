'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var GolfHoleSchema = new Schema({
  courseid: String,
  holenr: {type: Number, required: true, min: 1, max: 18 },
  par: {type: Number, required: true, min: 2, max: 7 },
  hcindex: {type: Number, required: true, min: 1, max: 18 },
  length: {type: Number, required: true, min: 10, max: 700 },
  name: String,
  pic: String
});

module.exports = mongoose.model('Golfhole',GolfHoleSchema);
