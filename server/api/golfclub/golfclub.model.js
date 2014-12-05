'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GolfClubSchema = new Schema({
  name: { type: String, required: true },
  info: String,
  web: String,
  gps: String
});

module.exports = mongoose.model('Golfclub', GolfClubSchema);


