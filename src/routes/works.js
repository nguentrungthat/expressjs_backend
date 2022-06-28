const express = require('express');
const router = express.Router();
const helper = require('../app/lib/helper');


const WorksController = require('../app/controllers/WorksController');

router.post('/create', helper.authenticateToken, WorksController.create);

router.post('/id', helper.authenticateToken, WorksController.id);

router.post('/work_id', helper.authenticateToken, WorksController.work_id);

router.post('/work_receive_id', helper.authenticateToken, WorksController.work_receive_id);

router.post('/project_by_userid', helper.authenticateToken, WorksController.project_by_userid);

router.post('/work_by_projectid', helper.authenticateToken, WorksController.work_by_projectid);


router.post('/update_work_receive', helper.authenticateToken, WorksController.update_work_receive);

router.post('/update_work_status', helper.authenticateToken, WorksController.update_work_status);

router.post('/update_receive_status', helper.authenticateToken, WorksController.update_receive_status);


router.get('/', helper.authenticateToken, WorksController.index);




module.exports = router;
