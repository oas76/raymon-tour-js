/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Golfclub = require('./golfclub.model');

exports.register = function(socket) {
  Golfclub.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Golfclub.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('golfclub:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('golfclub:remove', doc);
}