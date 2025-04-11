const express = require('express');
const multer = require('multer');
const { CreateUser, b } = require('../controller/UserController');
const router = express.Router();

const storage = multer.memoryStorage(); 
const upload = multer({ storage });

router.post('/CreateUser', upload.single('profileImg'), CreateUser);
router.get('/test2', b);

module.exports = router;