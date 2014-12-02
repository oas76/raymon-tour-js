'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GolfClubSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  web: String,
  gps: String
});

module.exports = mongoose.model('Golfclub', GolfClubSchema);


