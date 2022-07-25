const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersAPIController');

//Rutas
//Listado de usuario
router.get('/', usersAPIController.list);
//Detalle de un usuario
router.get('/:id', usersAPIController.detail);
//Eliminar un usuario
router.delete('/delete/:id', usersAPIController.destroy);
//Agregar un usuario
//router.post('/create', usersAPIController.create);
//Modificar un usuario
//router.put('/update/:id', usersAPIController.update);

module.exports = router;