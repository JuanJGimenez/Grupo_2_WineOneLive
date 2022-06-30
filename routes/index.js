var express = require('express');
var router = express.Router();

const indexControllers = require('../controllers/indexControllers.js');

/* GET home page. */
router.get('/', indexControllers.home);

module.exports = router;
