var express = require('express');
var router = express.Router();
const path = require('path');

//Requiero Multer, ya que voy a permitir que el usuario que se registre suba su avatar
const multer = require('multer');

//Requiero el paquete expres-validator
const { body } = require('express-validator');

//Requerir el modulo de los controladores
const usersControllers = require('../controllers/usersControllers.js');

//Requerir los middleware
const guestMiddleware = require('../middleware/guestMiddleware.js');
const authMiddleware = require('../middleware/authMiddleware.js');

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

// Deberia exportarse a la carpeta middleware y ser requerido como tal
const formRegisterValidation = [
	body('user_first_name').notEmpty().withMessage('Tienes que escribir un nombre')
		.isLength({ min: 2 }).withMessage('Debe tener al menos 2 caracteres'),
	body('user_last_name').notEmpty().withMessage('Tienes que escribir un apellido')
		.isLength({ min: 2 }).withMessage('Debe tener al menos 2 caracteres'),
	body('user_email').notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('user_password').notEmpty().withMessage('Tienes que escribir una contraseña').isLength({ min: 4, max: 12 })
		.withMessage('Debe tener al menos entre 4 y 12 caracteres'),
	body('password_confirm').trim().notEmpty().custom((value, { req }) => {
		if (value !== req.body.user_password) {
			throw new Error('La contraseña debe coincidir')
		}
		return true;
	}),
	body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}
		return true;
	})
];

/* GET users listing. */
// Vista formulario de reistro de usurios
router.get('/login', guestMiddleware, usersControllers.login);
// Formulario de registro de usuarios
router.get('/register', guestMiddleware, usersControllers.registerView);
// Listado de usuarios
router.get('/list', usersControllers.list);
// Detalle de usuarios
router.get("/detail/:id", authMiddleware, usersControllers.userDetail);
// Edicion de usuarios
router.get("/edit/:id", authMiddleware, usersControllers.userEdit);

/* POST users listing. */
// Procesar el registro de usuarios
router.post('/register', fileUpload.single('image'), formRegisterValidation, usersControllers.register);
// Procesar el login de usuarios
router.post('/login', usersControllers.processLogin);
// Procesar edicion de usuarios
router.post("/edit/:id", fileUpload.single('image'), usersControllers.userUpdate);
// Procesar eliminacion de usuarios
router.post("/edit/delete/:id", usersControllers.delete);
// Logout - ruta que se activa al momento que el usuario desea salir de la página
router.get('/logout', usersControllers.logout);

module.exports = router;

