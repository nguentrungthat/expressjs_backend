const express = require('express');
const router = express.Router();

const WorksController = require('../app/controllers/WorksController');

router.post('/create', WorksController.create);

router.post('/ID', WorksController.show);

router.get('/', WorksController.index);




module.exports = router;
