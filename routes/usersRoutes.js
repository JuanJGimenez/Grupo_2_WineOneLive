var express = require('express');
var router = express.Router();
const multer = require ('multer');
const path = require ('path');
const { body } = require('express-validator');

const usersControllers = require('../controllers/usersControllers.js');
// const userLoginMiddleware = require('../middleware/userLoginMiddleware.js')

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

// deberia exportarse desde  un archivo en carpeta middleware
const validations = [
	body('user_first_name').notEmpty().withMessage('Tienes que escribir un nombre'),
  body('user_last_name').notEmpty().withMessage('Tienes que escribir un apellido'),
	body('user_email').notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
	.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('user_password').notEmpty().withMessage('Tienes que escribir una contraseña'),
  body('password_confirm').trim().notEmpty().custom((value, {req}) => {
    if(value !== req.body.user_password){
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
router.get('/login', usersControllers.login);
// Formulario de registro
router.get('/register', usersControllers.registerView);
// Listado de usuarios
router.get('/list', usersControllers.list);
// Detalle de usuarios
router.get("/detail/:id", usersControllers.userDetail);

/* POST users listing. */
// Procesar el registro
router.post('/register', fileUpload.single('image'), validations, usersControllers.register);
// Procesar el login
router.post('/login', usersControllers.processLogin);

module.exports = router;

