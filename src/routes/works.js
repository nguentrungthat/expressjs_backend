const express = require('express');
const router = express.Router();

const WorksController = require('../app/controllers/WorksController');

router.post('/create', WorksController.create);

router.post('/id', WorksController.id);

router.post('/work_id', WorksController.work_id);

router.get('/', WorksController.index);




module.exports = router;
