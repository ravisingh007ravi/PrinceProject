const express = require('express');
const { CreateUser, b } = require('../controller/UserController');
const router = express.Router();



router.post('/CreateUser',CreateUser);
router.get('/test2',b);

module.exports = router;