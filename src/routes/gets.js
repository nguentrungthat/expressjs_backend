const express = require('express');
const router = express.Router();

const GetsController = require('../app/controllers/GetsController');

router.get('/levels', GetsController.levels);

router.get('/evalutes', GetsController.evalutes);

router.get('/types', GetsController.types);


module.exports = router;