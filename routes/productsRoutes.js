var express = require('express');
var router = express.Router();
const path = require('path');

//Requiero Multer
const multer = require('multer');

//Requerir el modulo de los controladores
const productsControllers = require('../controllers/productsControllers.js');

//Requerir los middleware
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

/* GET products listing. */
// Listado completo de productos
router.get('/list', productsControllers.list);
// Detalle de productos
router.get('/product-detail/:id', productsControllers.detail);
// Registro de productos
router.get('/create', adminMiddleware, productsControllers.add);
// Edicion de productos
router.get('/edit/:id', adminMiddleware, productsControllers.edit);


/* POST products listing. */
// Renderizar por categorias
router.post('/categories', productsControllers.categories);
// Procesar el registro de productos
router.post('/create', fileUpload.single('image'), adminMiddleware, validatorMiddleware.productCreate,  productsControllers.create);
// Procesar eliminacion de productos
router.post('/delete/:id', adminMiddleware, productsControllers.delete);
// Procesar actualizacion de productos
router.post('/update/:id', fileUpload.single('image'), adminMiddleware, validatorMiddleware.productEdit, productsControllers.update);
// Busqueda de producto
router.post('/search/', productsControllers.search);


module.exports = router;