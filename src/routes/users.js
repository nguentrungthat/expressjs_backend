const express = require('express');
const router = express.Router();

const UsersController = require('../app/controllers/UsersController');

//router.post('/create', UsersController.create);

router.post('/id', UsersController.id);

router.get('/', UsersController.index);




module.exports = router;
