'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var GolfHoleSchema = new Schema({
  courseid: String,
  holenr: String,
  par: String,
  hcindex: String,
  length: String,
  name: String,
  pic: String
});

module.exports = mongoose.model('Golfhole',GolfHoleSchema);
