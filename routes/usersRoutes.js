var express = require('express');
var router = express.Router();
const multer = require ('multer');
const path = require ('path');

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

/* GET users listing. */
router.get('/login', usersControllers.login);
router.get('/register', usersControllers.registerView);
router.get('/list', usersControllers.list);
router.get("/detail/:id", usersControllers.userDetail);

/* POST users listing. */

router.post('/register', fileUpload.single('image'), usersControllers.register);

module.exports = router;

