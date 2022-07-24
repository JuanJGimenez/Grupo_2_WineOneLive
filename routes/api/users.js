const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersAPIController');

//Rutas
//Listado de clientes
router.get('/', usersAPIController.list);
//Detalle de un cliente
router.get('/:id', usersAPIController.detail);
//Agregar un cliente
//router.post('/create', clientesAPIController.create);
//Modificar un cliente
//router.put('/update/:id', clientesAPIController.update);
//Eliminar un usuario
router.delete('/delete/:id', usersAPIController.destroy);

module.exports = router;