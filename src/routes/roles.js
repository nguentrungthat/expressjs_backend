const express = require('express');
const router = express.Router();
const helper = require('../app/lib/helper');


const rolesController = require('../app/controllers/RolesController');

router.use('/:slug', helper.authenticateToken, rolesController.show);

router.use('/', helper.authenticateToken, rolesController.index);


module.exports = router;
