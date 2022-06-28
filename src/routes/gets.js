const express = require('express');
const helper = require('../app/lib/helper');
const router = express.Router();

const GetsController = require('../app/controllers/GetsController');

router.get('/levels', helper.authenticateToken, GetsController.levels);

router.get('/evalutes', helper.authenticateToken, GetsController.evalutes);

router.get('/types', helper.authenticateToken, GetsController.types);

router.get('/projects', helper.authenticateToken, GetsController.projects);



module.exports = router;