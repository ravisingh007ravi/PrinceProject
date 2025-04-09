const express = require('express');
const { a, b } = require('../controller/UserController');
const router = express.Router();



router.post('/test',a);
router.get('/test2',b);

module.exports = router;