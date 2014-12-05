'use strict';

var Golfclub = require('./golfclub.model');
var Golfcourse = require('./golfcourse.model');
var Golfhole = require('./golfhole.model');

exports.getclub = function() {
  var club = new Golfclub();
  club.name = "Oslo GK";
  club.info = "Ved Bogstadvannet";
  club.web = "http://www.oslogk.com";
  club.gps = "12.45.66 11.22.33";
  return club;
};

exports.getcourse = function(){
  return new Golfcourse({
    name: "Bogstad",
    tee: "63",
    par: 72,
    length: 6299,
    maleslope: 130,
    malerating: 72.3,
    femaleslope: 135,
    femalerating: 74
  });
};

exports.gethole = function(){
  return new Golfhole({
    holenr: 1,
    par: 4,
    hcindex: 7,
    length: 384,
    name: "Kickoff",
    pic: "http://www.url.co"
  });
};

exports.getincompletehole = function(){
  return new Golfhole({
    holenr: 1,
    length: 384,
    name: "Kickoff",
    pic: "http://www.url.co"
  });
};


exports.getincompletecourse = function(){
  return new Golfcourse({
    name: "Bogstad",
    tee: "63",
    maleslope: 130,
    malerating: 72.3,
    femaleslope: 135,
    femalerating: 74
  });
};


exports.getinvalidcourse = function(){
  return new Golfcourse({
    name: "Bogstad",
    tee: "63",
    par: 91,
    length: 6299,
    maleslope: 130,
    malerating: 72.3,
    femaleslope: 135,
    femalerating: 74
  });
};

exports.getinvalidhole = function(){
  return new Golfhole({
    holenr: 19,
    par: 4,
    hcindex: 7,
    length: 384,
    name: "Kickoff",
    pic: "http://www.url.co"
  });
};
