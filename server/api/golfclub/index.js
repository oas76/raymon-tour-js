'use strict';

var express = require('express');
var controller = require('./golfclub.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);

router.get('/:id/courses/', controller.courses);
router.get('/:id/courses/:cid', controller.showcourse);

router.get('/:id/courses/:cid/holes', controller.holes);
router.get('/:id/courses/:cid/holes/:hid', controller.showhole);

router.post('/', controller.create);
router.post('/:id/courses', controller.createcourse);
router.post('/:id/courses/:cid/holes', controller.createhole);

//router.put('/:id', controller.update);
//router.put('/:id/courses/:cid', controller.updatecourse);
//router.put('/:id/courses/:cid/holes/:hid', controller.updatehole);

//router.patch('/:id', controller.update);
//router.patch('/:id/courses/:cid', controller.updatecourse);
//router.patch('/:id/courses/:cid/holes/:hid', controller.updatehole);

router.delete('/:id', controller.destroy);
router.delete('/:id/courses/:cid', controller.destroycourse);
router.delete('/:id/courses/:cid/holes/:hid', controller.destroyhole);

module.exports = router;
