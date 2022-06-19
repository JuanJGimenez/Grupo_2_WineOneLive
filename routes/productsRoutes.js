var express = require('express');
var router = express.Router();

const productsControllers = require("../controllers/productsControllers.js");

router.get('/list', productsControllers.list);
router.get("/create", productsControllers.create);

module.exports = router;