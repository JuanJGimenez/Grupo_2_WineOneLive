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
//Eliminar un producto
router.delete('/delete/:id', productsAPIControllers.destroy);
//Crear un producto
//router.post('/create', productsAPIControllers.create);
//Modificar un producto
//router.put('/update/:id', productsAPIControllers.update);

module.exports = router;