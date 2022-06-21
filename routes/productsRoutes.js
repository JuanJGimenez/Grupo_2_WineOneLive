var express = require('express');
var router = express.Router();
const multer = require ('multer');
const path = require ('path');

const productsControllers = require('../controllers/productsControllers.js');

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
router.get('/list', productsControllers.list);
router.get('/product-detail/:id', productsControllers.detail);
router.get('/create', productsControllers.add);
router.get('/list/', productsControllers.list);

/* POST products listing. */
router.post('/categories', productsControllers.categories);
router.post('/create', fileUpload.single('image'), productsControllers.create);


module.exports = router;