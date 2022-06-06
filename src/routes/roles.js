const express = require('express');
const router = express.Router();

const rolesController = require('../app/controllers/RolesController');

router.use('/:slug', rolesController.show);

router.use('/', rolesController.index);


module.exports = router;
