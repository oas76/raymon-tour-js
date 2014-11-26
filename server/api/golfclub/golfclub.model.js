'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GolfclubSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Golfclub', GolfclubSchema);