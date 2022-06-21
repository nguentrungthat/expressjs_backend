const express = require('express');
const router = express.Router();
const helper = require('../app/lib/helper');


const LogsController = require('../app/controllers/LogsController');

router.post('/receive_id', helper.authenticateToken, LogsController.receive_id);

router.post('/create', helper.authenticateToken, LogsController.create);

router.post('/update', helper.authenticateToken, LogsController.update);

router.post('/receives_by_userID', helper.authenticateToken, LogsController.receives_by_userID);

router.get('/', helper.authenticateToken, LogsController.index);

module.exports = router;
