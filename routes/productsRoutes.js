var express = require('express');
var router = express.Router();

const productsControllers = require("../controllers/productsControllers.js");

router.get('/list/', productsControllers.list);
router.get("/create", productsControllers.create);
router.get("/product-detail/:id", productsControllers.detalleProducto);
router.get("/list/vinos", productsControllers.vinos);
router.get("/list/cervezas", productsControllers.cervezas);
router.get("/list/whiskys", productsControllers.whiskys);
router.get("/list/espumantes", productsControllers.espumantes);

module.exports = router;