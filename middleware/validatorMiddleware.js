const path = require('path');
const { body } = require("express-validator");

module.exports = {

    registerForm: [
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
    ],
    loginForm: [
        body('user_email').notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
            .isEmail().withMessage('Debes escribir un formato de correo válido'),
        body('user_password').notEmpty().withMessage('Tienes que escribir una contraseña').isLength({ min: 4, max: 12 })
            .withMessage('Debe tener al menos entre 4 y 12 caracteres')
    ],
    productCreate: [
        body('product_name').notEmpty().withMessage('Tienes que escribir un nombre para el producto'),
        body('product_description').notEmpty().withMessage('Tienes que escribir una descripcion'),
        body('price').notEmpty().withMessage('Tienes que escribir un precio').bail().isNumeric().withMessage('El precio debe ser un número'),
        body('category_id').notEmpty().withMessage('Tienes que seleccionar una categoria'),
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
    ]
}