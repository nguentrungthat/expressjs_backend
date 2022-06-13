const express = require('express');
const router = express.Router();

const WorksController = require('../app/controllers/WorksController');

router.post('/create', WorksController.create);

router.post('/id', WorksController.id);

router.post('/work_id', WorksController.work_id);

router.post('/work_receive_id', WorksController.work_receive_id);

router.post('/update_work_receive', WorksController.update_work_receive);

router.get('/', WorksController.index);




module.exports = router;
