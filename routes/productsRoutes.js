var express = require('express');
var router = express.Router();

const productsControllers = require('../controllers/productsControllers.js');

/* GET products listing. */
router.get('/list', productsControllers.list);
router.get('/product-detail/:id', productsControllers.detail);
router.get('/create', productsControllers.add);

/* POST products listing. */
router.post('/categories', productsControllers.categories);
router.post('/create', productsControllers.create);

module.exports = router;