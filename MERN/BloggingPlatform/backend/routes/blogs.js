const express = require('express');
const router = express.Router();
const {time} = require('../controllers/blogs');

router.get('/blogs',time)

module.exports = router;