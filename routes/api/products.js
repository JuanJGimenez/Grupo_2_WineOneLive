const express = require('express');
const router = express.Router();
const productsAPIControllers = require('../../controllers/api/productsAPIControllers');
const authMiddleware = require('../../middleware/adminMiddleware');

//Rutas
//Listado productos
router.get('/', productsAPIControllers.list);
//Detalle de un producto
router.get('/:id', productsAPIControllers.detail);
//Porducto por categoria
router.get('/category/:id', productsAPIControllers.category);
//Buscar un produco
router.get('/search/:id', productsAPIControllers.search);
//router.post('/create', clientesAPIController.create);
//Modificar un cliente
//router.put('/update/:id', clientesAPIController.update);
//Eliminar un cliente
router.delete('/delete/:id', productsAPIControllers.destroy);

module.exports = router;