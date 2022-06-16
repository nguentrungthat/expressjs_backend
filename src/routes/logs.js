const express = require('express');
const router = express.Router();

const LogsController = require('../app/controllers/LogsController');

router.post('/create', LogsController.create);

router.post('/update', LogsController.update);

router.get('/', LogsController.index);

module.exports = router;
