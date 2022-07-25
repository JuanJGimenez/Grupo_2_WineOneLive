var express = require('express');
var router = express.Router();
const path = require('path');

//Requiero Multer, ya que voy a permitir que el usuario que se registre suba su avatar
const multer = require('multer');

//Requerir el modulo de los controladores
const usersControllers = require('../controllers/usersControllers.js');

//Requerir los middleware
const guestMiddleware = require('../middleware/guestMiddleware.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const adminMiddleware = require('../middleware/adminMiddleware.js');
const validatorMiddleware = require('../middleware/validatorMiddleware.js');

// Configuracion multer
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, '../public/images'));
	},

	filename: (req, file, cb) => {
		let imageName = Date.now() + path.extname(file.originalname);
		cb(null, imageName);
	}
});

const fileUpload = multer({ storage });

/* GET users listing. */
// Vista formulario de reistro de usurios
router.get('/login', guestMiddleware, usersControllers.login);
// Formulario de registro de usuarios
router.get('/register', guestMiddleware, usersControllers.registerView);
// Listado de usuarios
router.get('/list', adminMiddleware, usersControllers.list);
// Detalle de usuarios
router.get('/detail/:id', authMiddleware, usersControllers.userDetail);
// Edicion de usuarios
router.get('/edit/:id', authMiddleware, usersControllers.userEdit);

/* POST users listing. */
// Procesar el registro de usuarios
router.post('/register', fileUpload.single('image'), validatorMiddleware.registerForm, usersControllers.register);
// Procesar el login de usuarios
router.post('/login', validatorMiddleware.loginForm, usersControllers.processLogin);
// Procesar edicion de usuarios
router.post('/edit/:id', fileUpload.single('image'), usersControllers.userUpdate);
// Procesar eliminacion de usuarios
router.post('/edit/delete/:id', authMiddleware, usersControllers.delete);
// Logout - ruta que se activa al momento que el usuario desea salir de la página
router.get('/logout', usersControllers.logout);

module.exports = router;

