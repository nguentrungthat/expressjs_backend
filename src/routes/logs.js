const express = require('express');
const router = express.Router();
const helper = require('../app/lib/helper');


const LogsController = require('../app/controllers/LogsController');

router.post('/create', helper.authenticateToken, LogsController.create);

router.post('/update', helper.authenticateToken, LogsController.update);

router.get('/', helper.authenticateToken, LogsController.index);

module.exports = router;
